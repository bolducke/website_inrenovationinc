<i18n>
{
  "en": {
    "title": "MAIL US YOUR MESSAGE"
      },
  "fr": {
    "title": "Envoyez-nous un message"
  }
}
</i18n>

<template>
<base-section id="keep-in-touch" space="56">
    <v-container>
        <v-row justify="space-between">
            <v-col cols="12" md="5">
                <template v-for="(content, i) in business">
                    <base-avatar-card :key="i" :icon="content.icon" :outlined="false" :title="content.title" color="transparent" horizontal space="0">
                        <!-- Do not use v-html for user -->
                        <!-- provided values -->
                        <div class='mt-3' v-html="content.html" />
                    </base-avatar-card>

                    <v-divider v-if="i + 1 !== business.length" :key="`divider-${i}`" class="my-2" />
                </template>
            </v-col>

            <v-responsive class="text-center">
                <v-divider vertical />
            </v-responsive>

            <v-col cols="12" md="6">
                <base-contact-form :title="$t('title')" @submit="registerEmail" />
            </v-col>
        </v-row>
    </v-container>
</base-section>
</template>

<script>
export default {
    name: 'SectionKeepInTouch',
    data: () => ({}),
    computed: {
        business() {
            return this.$store.state.business
        },
        emails() {
            return this.$store.state.business[2].contents
        }
    },
    methods: {
        registerEmail(data) {
            this.$firebase.firestore.collection('messages/').add({
                name: data.name,
                phone: data.phone,
                email: data.email,
                subject: data.subject,
                body: data.body,
            })

        }
    },
}
</script>
