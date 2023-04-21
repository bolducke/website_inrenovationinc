import * as firebase from "firebase/app";
import "firebase/performance";
import "firebase/analytics";
import "firebase/storage";
import "firebase/firestore"
import "firebase/functions";

var firebaseConfig = {
    "projectId": "montreal-renovation-inc",
    "appId": "1:106522263299:web:1bb4d50a6164f9904e7336",
    "databaseURL": "https://montreal-renovation-inc.firebaseio.com",
    "storageBucket": "montreal-renovation-inc.appspot.com",
    "locationId": "us-east4",
    "apiKey": "AIzaSyAfLgh2H4Z5Q4HrTjpT3InPwzh1gElhfwQ",
    "authDomain": "montreal-renovation-inc.firebaseapp.com",
    "messagingSenderId": "106522263299",
    "measurementId": "G-FGJ21RLBRT"
};
if (firebaseConfig) {
    firebase.initializeApp(firebaseConfig);
}

export default {
    performance: firebase.performance(),
    analytics: firebase.analytics(),
    functions: firebase.functions(),
    storage: firebase.storage(),
    firestore: firebase.firestore() 
}