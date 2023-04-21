// Import the Firebase SDK for Google Cloud Functions.
const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp()


//setMetadataImageDimensions

const mkdirp = require('mkdirp-promise');
var probe = require('probe-image-size');
const path = require('path');
const os = require('os');
const fs = require('fs');

/**
 * Supported file types
 */
const supportedContentTypes = [
    "image/jpeg",
    "image/png",
    "image/tiff",
    "image/webp",
  ];

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
exports.setMetadataImageDimensions = functions.storage.object().onFinalize(async (object) => {
    const { contentType } = object;

    if (!supportedContentTypes.includes(contentType)) {
        console.log("Supported format: ",supportedContentTypes," Unspported format: ",contentType);
        return;
    }

    if (object.contentEncoding === "gzip") {
        console.log("gzip encoding is not supported")
        return;
    }

    if ("width" in object.metadata && "height" in object.metadata) {
        return;
    }

    console.log("Name: ", object.name)

    const bucket = admin.storage().bucket(object.bucket);
    const file = bucket.file(object.name); // File path in the bucket.

    const tempLocalFile = path.join(os.tmpdir(), object.name);
    const tempLocalDir = path.dirname(tempLocalFile);

    // Create the temp directory where the storage file will be downloaded.
    await mkdirp(tempLocalDir);
    // Download file from bucket.
    await file.download({ destination: tempLocalFile });
    console.log('The file has been downloaded to', tempLocalFile);

    var input = require('fs').createReadStream(tempLocalFile);

    probe(input).then(async (result) => {
        const metadata = {
            contentType: contentType,
            metadata: {
                width: result.wUnits,
                height: result.hUnits
            }
        }

        await file.setMetadata(metadata)
        console.log("Width: ",result.wUnits,"Height: ", result.hUnits);
        input.destroy()
        return null;
    }).catch((error) => {
        console.log(error)
    })

    fs.unlinkSync(tempLocalFile);
});

//Send emails
const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    host: "mail.privateemail.com",
    port: 465,
    secure: true, // upgrade later with STARTTLS
    auth: {
      user: functions.config().namecheap.email,
      pass: functions.config().namecheap.password
    }
  });

exports.sendBackMessageToMailboxe = functions.firestore.document('messages/{messageId}').onCreate((snap,context) => {
    let doc = snap.data();
    console.log(doc)
    if(doc !== undefined)
    {
        let msg = {
            from: functions.config().namecheap.email,
            to: functions.config().namecheap.email,
            subject: "inrenovaton.com: " + doc.subject,
            html: ""
        }

        msg.html = `<div>
                    ${doc.body}
                    </div>
                    <hr/>
                    <div>
                    <table cellspacing="0" cellpadding="6">
                        <tbody>
                        <tr>
                            <th>Name</th>
                            <td>${doc.name}</td>
                        </tr>
                        <tr>
                            <th>Phone</th>
                            <td>${doc.phone}</td>
                        </tr>
                        <tr>
                            <th>Email</th>
                            <td>${doc.email}</td>
                        </tr>
                        </tbody>
                    </table>
                    </div>`

        transporter.sendMail(msg, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        })
    }
})