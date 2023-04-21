<i18n>
{
  "en": {
    "heading": "Affiliates"
  },
  "fr": {
    "heading": "Affiliations"
  }
}
</i18n>

<template>
  <base-section id="affiliates" class="grey lighten-4" space="36">
    <v-container>
      <base-section-heading :title="$t('heading')" />

      <v-slide-group class="pl-md-6">
        <v-slide-item
          v-for="(aff, n) in affiliates"
          :key="n"
          class="align-self-center justify-space-around mx-2"
        >
          <v-row justify="center">
            <a :href="aff.url" target="_blank">
              <v-col cols="12">
                <v-hover v-slot:default="{ hover }">
                  <v-img
                    :src="require(`@/assets/main/affiliates-${aff.image}`)"
                    :class="hover ? 'elevation-4' : ''"
                    color="grey"
                    max-height="75%"
                    max-width="50vw"
                  />
                </v-hover>
                {{ aff.content }}
              </v-col>
            </a>
          </v-row>
        </v-slide-item>
      </v-slide-group>
    </v-container>
  </base-section>
</template>

<script>
export default {
  name: "SectionAffiliates",
  data: () => ({
    affiliates: [
      {
        image: "apchq.png",
        url:
          "https://www.trouverunentrepreneur.com/profile/montreal/renovation-montreal-i-n-inc?encodedSearchURL=%252Fmontreal%252Bqc%252Bcanada%252Frenovation-montreal%253Fdistance%253D20",
        content: "",
      },
      {
        image: "regie.png",
        url:
          "https://www.pes.rbq.gouv.qc.ca/RegistreLicences/Recherche/Resultats/FicheDetenteur?mode=Entreprise&crit=eyJOb21FbnRyZXByaXNlIjpudWxsLCJOb21FbnRyZXByaXNlUmVjaGVyY2hlIjoiIiwiTm9MaWNlbmNlIjoiNTcwMy00MTgzLTAxIiwiTkVRIjpudWxsLCJOb1RlbGVwaG9uZSI6bnVsbCwiTm9tIjpudWxsLCJQcmVub20iOm51bGwsIkNvZGVSZWdpb25BZG1pbmlzdHJhdGl2ZSI6bnVsbCwiQ29kZVBvc3RhbCI6bnVsbCwiSWRTb3VzQ2F0ZWdvcmllMSI6bnVsbCwiSWRTb3VzQ2F0ZWdvcmllMiI6bnVsbCwiSWRTb3VzQ2F0ZWdvcmllMyI6bnVsbCwiTGF0aXR1ZGUiOjAuMCwiTG9uZ2l0dWRlIjowLjAsIkRpc3RhbmNlTWF4aW1hbGUiOm51bGwsIkRpc3RhbmNlTWF4aW1hbGVJbnQiOjAsIlR5cGVSZWNoZXJjaGVSZWdpb24iOm51bGx9&ent=1-KCSKXJ",
        content: "Licence: 5703-4183-01",
      },
      {
        image: "ccq.png",
        url:
          "https://www.ccq.org/fr-CA/qualification-acces-industrie/certificat-competence",
        content: "",
      },
    ],
  }),
};
</script>
