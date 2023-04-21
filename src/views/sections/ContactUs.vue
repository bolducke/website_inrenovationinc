<i18n>
{
    "fr": {
    "title": "Estimation gratuite",
    "text" : "Contactez-nous pour une estimation gratuite ou laissez-nous vos commentaires!",
    "btn" : "Nous rejoindre"
  },
  "en": {
    "title": "Free quote",
    "text" : "Contact us for a free quote or leave us your comments!",
    "btn" : "Contact us"
  }
}
</i18n>

<template>
<v-theme-provider>
    <base-section id="contact-us" class="primary" space="40">
        <v-container>
            <v-row justify="center">
                <v-col cols="12" md="10">
                    <base-title :space="$vuetify.breakpoint.mdAndUp ? 0 : 4" :title="$t('title')" />

                    <base-body space="0">
                        <span class="black--text text-title">
                            {{$t('text')}}
                        </span>
                    </base-body>
                </v-col>

                <v-col cols="12" md="2">
                    <base-btn color="black" :to="{ name: 'Contact'}" outlined>
                        {{$t('btn')}}
                    </base-btn>
                </v-col>
            </v-row>
        </v-container>
    </base-section>
</v-theme-provider>
</template>

<script>
export default {
    name: 'SectionContactUs',
}
</script>
