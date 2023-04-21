<template>
  <div>
    <v-row class="mx-n10 my-n5 py-2 fullscreen">
      <v-carousel continuous cycle interval='5m' :show-arrows="false" hide-delimiters>
        <v-carousel-item>
          <v-img
            src="https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            width="100%"
            height="auto"
          />
        </v-carousel-item>
      </v-carousel>
    </v-row>

    <v-container>
      <v-card class="my-5">
        <v-card-title class="center-text justify-center text-h4 text-wrap">
          <strong>Nous offrons tout type de services</strong>
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col
              cols="12"
              sm='6'
              md="3"
              v-for="(service,serviceIndex) in $store.state.services"
              :key="serviceIndex"
            >
              <v-card class="mx-auto" outlined height="100%">
                <v-img class="white--text align-end" :src="service.img" height="150px">
                  <v-card-title>{{service.name}}</v-card-title>
                </v-img>
                
              <div class="d-flex flex-column">
                <v-card-text class='grow'>
                {{service.desc}}
                </v-card-text>
              </div>

                <v-card-actions class="mt-auto">
                  <v-btn outlined>En savoir plus</v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>

      <v-card class="my-5">
        <v-card-title class="text-h4 justify-center">
          <strong>Commentaires de nos clients</strong>
        </v-card-title>
        <v-card-text>
          <v-carousel
            light
            continuous
            cycle
            :show-arrows="false"
            hide-delimiter-background
            delimiter-icon="mdi-account"
            height="max-content"
          >
            <v-carousel-item v-for="(com,comIndex) in commentaries" :key="comIndex" class="mb-8">
              <v-row>
                <v-col>
                  <v-card flat height="100%">
                    <v-card-title class="justify-center">{{com.name}}</v-card-title>
                    <v-card-subtitle class="text-center">{{com.details}}</v-card-subtitle>
                    <v-card-text class="font-italic" v-html="com.msg"></v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </v-carousel-item>
          </v-carousel>
        </v-card-text>
      </v-card>

      <v-card class="my-5">
        <v-card-title class="text-h4 justify-center">
          <strong>Un peu plus sur nous</strong>
        </v-card-title>
        <v-row>
          <v-col cols="12" md="12">
            <v-card flat max-width="500">
              <v-card-title>Qui sommes-nous?</v-card-title>
              <v-card-text>Mango, c’est une équipe de développeurs d’applications d’affaires… qui ne s’est pas toujours appelée Mango et qui n’a pas toujours développé des applications d’affaires. Fondée en 2004 à titre de société de consultation informatique, notre entreprise adopte l’identité Mango Software en 2014 et concentre ses activités autour de trois pôles en forte croissance : le développement d’applications web, mobiles et d'objets connectés.</v-card-text>
            </v-card>
          </v-col>

          <v-col cols="12" md="4">
            <v-card flat>
              <v-card-title>L'entraide</v-card-title>
              <v-card-text>Vivant dans un monde désormais axé sur le partage des connaissances, nous croyons fortement que l’entraide entre les partenaires, la direction et les employés permet d’accroître la croissance d’une entreprise beaucoup plus rapidement et ainsi faciliter l’exécution au quotidien.</v-card-text>
            </v-card>
          </v-col>

          <v-col cols="12" md="4">
            <v-card flat>
              <v-card-title>L’innovation</v-card-title>
              <v-card-text>Notre désir à constamment nous dépasser nous pousse à innover et élaborer des procédés afin de garder nos standards élevés et être une entreprise compétitive sur la scène internationale. C’est pourquoi nous trouvons important d’investir dans le capital humain puisque c’est notre première source d’innovation.</v-card-text>
            </v-card>
          </v-col>

          <v-col cols="12" md="4">
            <v-card flat>
              <v-card-title>La Passion</v-card-title>
              <v-card-text>Notre objectif est de travailler avec des gens qui ont à coeur leur travail et qui sauront transmettre leur passion aux autres dans leur quotidien au bureau comme à l’extérieur par leur vision et leur action. C’est également de chercher à constamment se surpasser afin de devenir un leader dans son domaine.</v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-card>

      <v-card class="my-5">
        <v-card-title class="text-h4 justify-center">
          <strong>Affiliation professionnelle</strong>
        </v-card-title>

        <v-card-text class="text-center">
          <v-row align="center" justify="center">
            <v-col cols="6" sm=3>
              <v-img width="200px" src='https://www.rbq.gouv.qc.ca/fileadmin/templates/images/logo-rbq.gif'></v-img>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>

      <ContactUs class="my-5" />
    </v-container>
  </div>
</template>

<style scoped lang="scss">
section {
  padding-top: 96px;
}

.bottom {
}
</style>

<script>
import ContactUs from "./components/ContactUs";

export default {
  length: 3,
  onboarding: 0,
  name: "Home",
  components: {
    ContactUs,
  },
  data: () => ({
    commentaries: [
      {
        name: "Raymond",
        details: "27 decembre",
        msg:
          "Cher Daniel, <br><br> Vous avez travaillé chez moi, rue Dauphin à Chambly, pour notre salle de bain. Je tiens à vous faire part de mon sentiment quant au travail que vous avez accompli. Votre équipe, composée de Pascal et Nicolas, est vraiment extraordinaire, toujours disponible, minutieuse et très patiente. J'ai particulièrement apprécié la diligence et la conscience professionnelle avec lesquelles vous avez mené les travaux. Vous avez également fait preuve, en plus de vos compétences, d'une excellente capacité de réaction en vous adaptant très rapidement à ce qui vous était demandé. Vous avez su, en particulier, régler les petits problèmes avant même que nous ne les voyions. Je tenais, pour cela, à vous exprimer ma sincère gratitude et mes vives félicitations. J'espère que, de votre côté, vous avez pris du plaisir à exécuter les travaux. Je sais maintenant que je pourrai faire appel à votre collaboration en toute confiance, en ayant l'assurance d'un travail de qualité, dans le respect des délais impartis. Je vous réitère donc tous mes remerciements et mes félicitations pour votre contribution. Un client plus que satisfait",
      },
      {
        name: "Raymond",
        details: "Lapocatière 45 ans",
        msg:
          "Allo asdasdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      },
    ],
  }),
};
</script>