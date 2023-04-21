<i18n>
{
  "en": {
    "heading": "Leave us a comment!"
  },
  "fr": {
    "heading": "Laissez-nous un commentaire!"
  }
}
</i18n>

<template>
<base-section>
    <base-section-heading :title="$t('heading')" icon="mdi-chat-processing"></base-section-heading>
    <v-container>
        <v-carousel light hide-delimiter-background :show-arrows="false" delimiter-icon="mdi-account" height="max-content">
            <v-carousel-item v-for="(com,comIndex) in items" :key="comIndex" class="mb-8">
                <v-row>
                    <v-col>
                        <v-card flat height="100%">
                            <v-card-title class="justify-center">{{com.name}}</v-card-title>
                            <v-card-subtitle class="text-center">{{com.details}}</v-card-subtitle>
                            <v-card-text class="font-italic text-body1" v-html="com.msg"></v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-carousel-item>
        </v-carousel>
    </v-container>
</base-section>
</template>

<script>
export default {
    name: "Commentaries",
    data: () => ({
        items: [{
                name: "Raymond",
                details: "27 decembre",
                msg: "Cher Daniel, <br><br> Vous avez travaillé chez moi, rue Dauphin à Chambly, pour notre salle de bain. Je tiens à vous faire part de mon sentiment quant au travail que vous avez accompli. Votre équipe, composée de Pascal et Nicolas, est vraiment extraordinaire, toujours disponible, minutieuse et très patiente. J'ai particulièrement apprécié la diligence et la conscience professionnelle avec lesquelles vous avez mené les travaux. Vous avez également fait preuve, en plus de vos compétences, d'une excellente capacité de réaction en vous adaptant très rapidement à ce qui vous était demandé. Vous avez su, en particulier, régler les petits problèmes avant même que nous ne les voyions. Je tenais, pour cela, à vous exprimer ma sincère gratitude et mes vives félicitations. J'espère que, de votre côté, vous avez pris du plaisir à exécuter les travaux. Je sais maintenant que je pourrai faire appel à votre collaboration en toute confiance, en ayant l'assurance d'un travail de qualité, dans le respect des délais impartis. Je vous réitère donc tous mes remerciements et mes félicitations pour votre contribution. Un client plus que satisfait",
            },
            {
                name: "Raymond",
                details: "Lapocatière 45 ans",
                msg: "Allo asdasdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
            },
        ],
    }),
};
</script>
