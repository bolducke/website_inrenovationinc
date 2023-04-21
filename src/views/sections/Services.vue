<i18n>
{
  "en": {
    "general": {
        "spec": "Specialities",
        "contact-us": "Do you have a project? Contact us online or by phone."
    },
    "services": [
      {
        "tab" : "General",
        "title": "For all your home renovation needs",
        "features": ["Demolition","Painting","Installation of drywall","Flooring (hardwood, floating and any other)","Door installation","Staircase ","Finishing work of all kinds"]
      },
      {
        "tab": "Kitchen",
        "title": "Give yourself the means to be the chef you've always dreamed of",
        "features": ["Tiling", "Installation of kitchen cabinet","Counter installation","Made to measure cabinet","Finishing work of all kinds"]
      },
      {
        "tab" : "Bathroom",
        "title": "Take care of your intimacy",
        "features": ["Tiling","Vanity installation","Installation of bath and shower","Custom shower","Vanity made to measure"]
      },
      {
        "tab" : "Basement",
        "title": "New bedrooms, a home theatre or a workshop. Rediscover your basement !",
        "features": ["Renovation","Complete finishing of your basement"]
      },
      {
        "tab": "Exterior",
        "title": "Make your neighbours blush",
        "features": ["Terrace", "Patio","Installation of doors and windows","Siding","Roofing"]
      },
      {
        "tab": "Commercial and institutional",
        "title": "Breathe new life into your business",
        "features": ["Building expansion", "Renovation"]
      },
      {
        "tab": "Urban heritage",
        "title": "Restore or renovate your heritage building",
        "features": ["Restoration", "Renovation","Made to measure doors","Handmade custom mouldings"]
      },
      {
        "tab": "Carpentry",
        "title": "Expertize in carpentry at your service",
        "features": ["Made to measure doors", "Made to measure vanities","Made to measure kitchen cabinets","Handmade custom mouldings"]
      }
    ]
  },
  "fr": {
    "general": {
        "spec": "Spécialisation",
        "contact-us": "Avez-vous un projet? Contactez-nous en ligne ou par téléphone."
    },
    "services": [
      {
        "tab" : "Générale",
        "title": "Pour tous vos besoins en matière de rénovation résidentielle",
        "features": ["Démolition","Peinture","Installation de cloisons sèches","Pose de plancher (Bois franc, flottant et tout autre)","Installation de porte","Escalier ","Finition en tout genre"]
      },
      {
        "tab": "Cuisine",
        "title": "Donnez-vous les moyens d’être le/la chef cuisinier/ère dont vous avez toujours rêvé",
        "features": ["Pose de céramique et tuile murale", "Installation d’armoire de cuisine","Installation de comptoir","Fabrication d’armoire sur mesure","Finition en tout genre"]
      },
      {
        "tab" : "Salle de bain",
        "title": "Prenez soin de votre intimité",
        "features": ["Pose de céramique et tuile murale","Installation de vanité","Installation de bain et douche","Douche sur mesure","Vanité sur mesure"]
      },
      {
        "tab" : "Soul-sol",
        "title": "De nouvelles chambres, un cinéma maison ou encore un atelier. Redécouvrez votre sous-sol",
        "desc": "Avec un espace personnel,",
        "features": ["Rénovation","Finition complète de votre sous-sol"]
      },
      {
        "tab": "Extérieur",
        "title": "Faites rougir vos voisins",
        "features": ["Patio", "Terrase","Installation de portes et fenêtres","Revêtement extérieur","Toiture"]
      },
      {
        "tab": "Commercial et institutionnel",
        "title": "Redonnez un coup de fraîcheur à votre commerce",
        "features": ["Agrandissement", "Rénovation"]
      },
      {
        "tab": "Patrimoine",
        "title": "Restaurez ou rénovez votre bâtiment patrimonial",
        "features": ["Restauration", "Rénovation","Fabrication de porte","Fabrication de moulure"]
      },
      {
        "tab": "Menuiserie",
        "title": "Une expertise en menuiserie et charpenterie à votre service",
        "features": ["Porte sur mesure", "Vanité sur mesure","Armoire de cuisine sur mesure","Moulure "]
      }
    ]
  }
}
</i18n>

<template>
<base-section id="services" space="30">
    <v-container>
        <v-tabs v-model="tab" grow center-active centered show-arrows>
            <v-tab v-for="(item,itemIndex) in services" :key="itemIndex" :id="`${item.section}`" class="black--text px-1 mx-1">{{ item.tab }}</v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab" touchless>
            <v-tab-item v-for="(service,n) in services" :key="n">
                <v-container>
                    <v-row>
                        <v-col cols="12" md="6" order="1" :order-md="((n % 2 === 0) ? '0' : '1')">
                            <v-card flat width="100%" height="100%" class="mt-n2  d-flex flex-column">
                                <div class="d-flex flex-column flex-grow-1">

                                    <v-card-title class="word_break text-h6 font-weight-bold text-uppercase">{{service.title}}</v-card-title>
                                    <v-card-text class="pb-0 d-flex flex-column flex-grow-1">
                                        <v-card flat outlined height="100%">
                                            <v-card-title class="body-1">
                                                {{$t('general.spec')}}
                                            </v-card-title>
                                            <v-card-text>
                                                <ul>
                                                    <li v-for="(feat,j) in service.features" :key="j">{{feat}}</li>
                                                </ul>
                                            </v-card-text>
                                        </v-card>
                                    </v-card-text>
                                    <v-card-text>
                                        {{$t('general.contact-us')}}
                                    </v-card-text>
                                </div>
                            </v-card>
                        </v-col>
                        <v-col cols="12" md="6" order="0">
                            <v-col>
                                <base-gallery hide-delimiters v-if="!loadingGallery" :items="$store.state.gallery[`${service.section}`]">
                                </base-gallery>
                            </v-col>
                        </v-col>
                    </v-row>
                </v-container>
            </v-tab-item>
        </v-tabs-items>
    </v-container>
</base-section>
</template>

<script>
export default {
    name: "SectionServices",

    components: {},
    created() {
        this.storageRef = this.$firebase.storage.ref();

        Promise.all(this.services.map(async (service) => {
            if (!(service.section in this.$store.state.gallery)) {
                this.$store.state.gallery[`${service.section}`] = await this.populateGallery(service.section);
            }
        })).finally(() => {
            this.loadingGallery = false
        })
    },
    mounted() {
        if (this.$route.hash) {
            let section = this.$route.hash.replace("#", "")
            let index = this.services.findIndex(obj => obj.section == section)
            if (index != -1) {
                this.tab = index
            }
        }
    },
    data: () => ({
        tab: null,
        loadingGallery: true,
    }),
    methods: {
        async populateGallery(section) {
            var srcs = await this.storageRef
                .child(`gallery/${section}`)
                .listAll()
                .then((all) => {
                    return Promise.all(
                        all.items.map(async (ref) => {
                            var url = await ref.getDownloadURL();
                            var filepathSplitted = ref.name.split('.');
                            var path = `gallery/${section}/thumbnail/${filepathSplitted[0]}_400x400.${filepathSplitted[1]}`
                            var thumbnail = await this.storageRef.child(path).getDownloadURL();
                            return {
                                src: url,
                                thumbnail: thumbnail
                            }
                        })
                    );
                });

            return srcs;
        }
    },
    computed: {
        services() {
            return this.$store.state.services.sections.map((v, i) => ({
                ...v,
                ...this.$i18n.t("services")[i]
            }));
        },
    },
};
</script>

<style lang="scss">
.word_break {
    word-break: break-word;
}
</style>
