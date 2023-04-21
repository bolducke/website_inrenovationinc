<i18n>
{
   "en":{
      "fields":{
         "name":{
            "label":"Name"
         },
         "phone":{
            "label":"Cellphone"
         },
         "email":{
            "label":"Email"
         },
         "subject":{
            "label":"Subject"
         },
         "body":{
            "label":"Body"
         },
         "send":{
            "label":"Send"
         }
      },
      "rules":{
         "required":"Field required",
         "valid_phone":"Cellphone number is not in a valid format. (ex: 450 123-1234 514 123-1234)",
         "valid_email":"Email is not in a valid format (ex: people@example.com)"
      }
   },
   "fr":{
      "fields":{
         "name":{
            "label":"Nom"
         },
         "phone":{
            "label":"Téléphone"
         },
         "email":{
            "label":"Email"
         },
         "subject":{
            "label":"Objet"
         },
         "body":{
            "label":"Message"
         },
         "send":{
            "label":"Envoyer"
         }
      },
      "rules":{
         "required":"Champs requis",
         "valid_phone":"Le numéro de téléphone n'est pas dans un format valide. (ex: 450 123-1234 514 123-1234)",
         "valid_email":"L'email n'est pas dans un format valide (ex: gens@exemple.com)"
      }
   }
}
</i18n>

<template>
<div>
    <base-info-card :title="title" :subtitle="subtitle" space="4" color="primary" />
    <v-form v-model="valid" ref="form">
        <base-text-field v-model="fields.name.content" :rules="[rules.required]" prepend-icon="mdi-account" :label="this.$i18n.t('fields.name.label')" required />

        <v-row>
            <v-col cols="6">
                <base-text-field v-model="fields.phone.content" :rules="[rules.required,rules.validPhone]" prepend-icon="mdi-cellphone" :label="this.$i18n.t('fields.phone.label')" required />
            </v-col>
            <v-col cols="6">
                <base-text-field v-model="fields.email.content" :rules="[rules.required,rules.validEmail]" prepend-icon="mdi-email" :label="this.$i18n.t('fields.email.label')" required />
            </v-col>
        </v-row>
        <base-text-field v-model="fields.subject.content" :rules="[rules.required]" prepend-icon="mdi-help" :label="this.$i18n.t('fields.subject.label')" required />

        <base-textarea v-model="fields.body.content" :rules="[rules.required]" prepend-icon="mdi-android-messages" class="mb-6" :label="this.$i18n.t('fields.body.label')" />

        <base-btn :color="!theme.isDark ? 'accent' : 'white'" :disabled="!valid" outlined class="ml-6" @click="sendUpper">{{this.$i18n.t('fields.send.label')}}</base-btn>
    </v-form>
</div>
</template>

<script>
export default {
    name: "BaseContactForm",

    // Injected from the Vuetify Themeable mixin
    inject: ["theme"],

    props: {
        subtitle: String,
        title: {
            type: String,
            default: null,
        }
    },

    data: () => ({
        valid: false,
        fields: {
            name: {
                content: "",
            },
            subject: {
                content: "",
            },
            phone: {
                content: "",
            },
            email: {
                content: "",
            },
            body: {
                content: "",
            }
        }
    }),
    computed: {
        rules() {
            return {
                required: (v) => !!v || this.$i18n.t("rules")["required"],
                validPhone: (v) =>
                    (!!v &&
                        !!v.match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/g)) || this.$i18n.t("rules")["valid_phone"],
                validEmail: (v) =>
                    (!!v && !!v.match(/^.+@.+\..+$/g)) || this.$i18n.t("rules")["valid_email"],
            }

        }
    },
    methods: {
        sendUpper() {
            if (this.$refs.form.validate()) {
                this.$emit("submit", {
                    name: this.fields.name.content,
                    phone: this.fields.phone.content,
                    email: this.fields.email.content,
                    subject: this.fields.subject.content,
                    body: this.fields.body.content,
                });

                this.$refs.form.reset()
            }
        }
    },
};
</script>
