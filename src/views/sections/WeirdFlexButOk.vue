<i18n>
{
  "en": {
    "items": [
      {
        "title": "Since"
      },
      {
        "title": "Projects"
      }
    ]
  },
  "fr": {
    "items": [
      {
        "title": "Depuis"
      },
      {
        "title": "Projets"
      }
    ]
  }
}
</i18n>

<template>
<base-section id="WeirdFlexButOk" class="grey lighten-4" space="0">
    <v-container class="pb-n16">
        <v-slide-group>
            <template v-for="(content,n) in items">
                <v-slide-item :key="n" class="align-self-center justify-center">
                    <base-info-card :title="content.title">
                        <div class="text-h3 text-sm-h2 grey--text">{{content.text}}</div>
                    </base-info-card>
                </v-slide-item>

                <v-responsive v-if="n < items.length - 1" :key="`divider-${n}`" class="text-center" height="150" width="48">
                    <v-divider vertical />
                </v-responsive>
            </template>
        </v-slide-group>
    </v-container>
</base-section>
</template>

<script>
export default {
    name: "SectionWeirdFlexButOk",
    computed: {
        items() {
            return [{
                    text: "2010",
                },
                {
                    text: "500+",
                },
            ].map((v, i) => ({
                ...v,
                ...this.$i18n.t("items")[i]
            }));
        },
    },
};
</script>
