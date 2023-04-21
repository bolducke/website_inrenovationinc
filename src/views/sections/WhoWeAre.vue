<i18n>
{
  "en": {
    "heading": "Who are we?",
    "text": "Montréal Rénovation Inc. is a team of professionals whose mission is customer satisfaction from the beginning to the completion of the project. Our team has impeccable thoroughness in its work that follows the highest standards in the industry.",
    "cards": [{
      "title": "Your Project",
      "text": "You find that some rooms could use a little more love. Do not hesitate. The quote is free."
    },
    {
      "title": "With Peace of Mind",
      "text": "You can have peace of mind. Let our team of professionals realize your projects. With the satisfaction of our customers and attention to detail as priorities, you have finally found a team worthy of your projects."
    },
    {
      "title": "At an Unbeatable Price",
      "text": "Thanks to a revised management method and an experienced team, we are able to offer superior service at an unbeatable price. Contact us for a free quote!"
    }]
  },
  "fr": {
    "heading": "Qui sommes-nous?",
    "text": "Montréal Rénovation Inc. est une équipe de professionnels qui a pour mission la satisfaction du client du début jusqu’à la réalisation du projet. Notre équipe possède une rigueur au travail impeccable et qui suit les plus hauts standards de l’industrie.",
    "cards": [{
      "title": "Votre projet",
      "text": "Vous trouvez que certaines pièces auraient besoin d'un peu plus d'amour. N'hésitez pas. L'estimation est gratuite."
    },
    {
      "title": "L’esprit tranquille",
      "text": "Vous pouvez avoir l’esprit tranquille. Laissez notre équipe de professionnelles réaliser vos projets. Avec la satisfaction de nos clients et le souci du détail comme priorités, vous avez enfin trouvé une équipe digne de vos projets."
    },
    {
      "title": "À un prix imbattable",
      "text": "Grâce à une méthode de gestion revisitée et une équipe d'expérience, nous sommes en mesure d’offrir un service de qualité supérieure à un prix imbattable. Contactez-nous pour avoir une estimation gratuite!"
    }]
  }
}
</i18n>

<template>
<base-section id="about-our-product">
    <base-section-heading icon="mdi-help" :title="$t('heading')" />

    <v-container>
        <v-row>
            <v-col cols="12" md="12" class="mb-8 grey lighten-4">
                {{$t('text')}}
            </v-col>

            <v-col v-for="card in cards" :key="card.title" cols="12" md="4">
                <base-info-card v-bind="card" />
            </v-col>
        </v-row>
    </v-container>
</base-section>
</template>

<script>
export default {
    name: "SectionAboutOurProduct",
    computed: {
        cards() {
            let callouts = [{
                    callout: "01",
                },
                {
                    callout: "02",
                },
                {
                    callout: "03",
                },
            ]

            let cards = callouts.map((v, i) => ({
                ...v,
                ...this.$t('cards')[i],
            }));

            return cards
        }
    },
    data: () => ({}),
};
</script>
