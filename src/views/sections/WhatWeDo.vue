<i18n>
{
  "en": {
    "heading": "What we do best",
    "subheading": "Services",
    "content": "Our team of experts is qualified to bring all your projects to fruition, regardless of their nature or size. Whether you have residential, commercial or heritage work, have no fear and let us help you.",
    "more": "More",
    "services": [{
        "title": "General",
        "content": "For all your home renovation needs"
      },
      {
        "title": "Kitchen",
        "content": "Give yourself the means to be the chef you've always dreamed of"
      },
      {
        "title": "Bathroom",
        "content": "Take care of your intimacy "
      },
      {
        "title": "Basement",
        "content": "New bedrooms, a home theatre or a workshop. Rediscover your basement."
      },
      {
        "title": "Exterior",
        "content": "Make your neighbours blush"
      },
      {
        "title": "Commercial and institutional",
        "content": "Breathe new life into your business"
      },
      {
        "title": "Urban heritage",
        "content": "Restore or renovate your heritage building"
      },
      {
        "title": "Carpentry",
        "content": "Expertize in carpentry at your service"
    }],
    "area": {
      "subheading": "Served Areas",
      "places": ["Metropolitan area of Montréal","Montréal","North Shore","South Shore"]
    }
  },
  "fr": {
    "heading": "Ce que nous faisons de mieux",
    "subheading": "Services",
    "content": "Notre équipe d’experts est qualifiée pour mener à terme tous vos projets, quelle que soit la nature ou l’ampleur de ceux-ci. Que vous ayez des travaux résidentiels, commerciaux ou patrimoniaux, soyez sans crainte et laissez-nous vous aider.",
    "more": "En savoir plus",
    "services": [{
        "title": "Générale",
        "content": "Pour tous vos besoins en matière de rénovation résidentielle"
      },
      {
        "title": "Cuisine",
        "content": "Donnez-vous les moyens d’être le/la chef cuisinier/ère dont vous avez toujours rêvé"
      },
      {
        "title": "Salle de bain",
        "content": "Prenez soin de votre intimité"
      },
      {
        "title": "Sous-sol",
        "content": "De nouvelles chambres, un cinéma maison ou encore un atelier. Redécouvrez votre sous-sol"
      },
      {
        "title": "Extérieur",
        "content": "Faites rougir vos voisins"
      },
      {
        "title": "Commercial et institutionnel",
        "content": "Redonnez un coup de fraîcheur à votre commerce"
      },
      {
        "title": "Patrimoine",
        "content": "Restaurez ou rénovez votre bâtiment patrimonial"
      },
      {
        "title": "Menuiserie",
        "content": "Une expertise en menuiserie et charpenterie à votre service"
    }],
    "area": {
      "subheading": "Zones desservies",
      "places": ["Grand Montréal","Montréal","Rive-Nord","Rive-Sud"]
    }
  }
}
</i18n>

<template>
<base-section id="what-we-do" space="20">
    <v-container>
        <base-info-card :title="$t('heading')" :subtitle="$t('subheading')">{{$t('content')}}</base-info-card>

        <v-row class="my-2" justify="center">
            <v-chip-group disabled column>
                <base-display-chip v-for="(z,j) in $t('area.places')" :key="j">{{z}}</base-display-chip>
            </v-chip-group>
        </v-row>

        <v-row justify="space-around">
            <v-col cols=12 sm=5 v-for="(content, i) in services" :key="`content-${i}`">

                <base-avatar-card style="height:100%;" class="mx-2" right :icon="content.icon" :outlined="false" :title="content.title" color="transparent" horizontal space="0">
                    <div class="d-flex flex-column">

                        <div class="mb-2 d-inline-flex flex-column flex-grow-1" v-html="content.content"></div>
                        <v-card-actions>
                            <base-btn :to="{ path:'/services', hash: content.section }">{{$t('more')}}</base-btn>
                        </v-card-actions>
                    </div>

                </base-avatar-card>

                <v-divider v-if="i < services.length - 2" />

            </v-col>
        </v-row>
    </v-container>
</base-section>
</template>

<script>
export default {
    name: "WhatWeDo",
    computed: {
        services() {
            let icons = [{
                    icon: "mdi-hammer-screwdriver",
                },
                {
                    icon: "mdi-table-chair",
                },
                {
                    icon: "mdi-shower",
                },
                {
                    icon: "mdi-stairs-down",
                },
                {
                    icon: "mdi-grass",
                },
                {
                    icon: "mdi-domain",
                },
                {
                    icon: "mdi-bank",
                },
                {
                    icon: "mdi-hand-saw",
                },
            ]

            let services = icons.map((v, i) => ({
                ...v,
                ...this.$t('services')[i],
                ...this.$store.state.services.sections[i],
            }));

            return services
        }
    }
};
</script>

<style>
#test {
    height: 100%;
}
</style>
