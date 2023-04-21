<i18n>
{
  "en": {
    "heading": "LET US CARRY OUT YOUR RENOVATION PROJECTS",
    "promo": "Free quote",
    "content": "Since 2010, our team of professionals has served a multitude of customers in the metropolitan area of Montréal with more than 500 projects to date. For all your renovation, expansion or construction projects, our team is at your service!"
  },
  "fr": {
    "heading": "LAISSEZ-NOUS MENER À BIEN VOS PROJETS DE RÉNOVATIONS",
    "promo": "Estimation gratuite",
    "content": "Depuis 2010, notre équipe de professionnels a servi de multiples clients dans la grande région de Montréal avec plus de 500 projets à ce jour. Pour tous vos projets de rénovations, d'agrandissement ou de construction, notre équipe est à votre service!"
  }
}
</i18n>

<template>
<section id="hero" space="0">
    <base-img :height="$vuetify.breakpoint.mdAndUp ? '500px' : '90vh' " :gradient="gradient" :src="src" flat max-width="100%" tile>
        <v-container class="fill-height px-4 py-12">
            <v-responsive class="d-flex align-center" height="100%" max-width="700" width="100%">
                <base-heading class="white--text" :title="$t('heading')"></base-heading>

                <div class="text-uppercase ml-1 my-2 text-h5"><strong>{{ $t('promo') }}</strong></div>

                <div class='ml-1'>
                    {{ $t('content') }}
                </div>

            </v-responsive>
        </v-container>
    </base-img>
</section>
</template>

<script>
import {
    HexToRGBA,
    RGBAtoCSS,
} from 'vuetify/lib/util/colorUtils'

export default {
    name: 'SectionHero',

    computed: {
        gradient() {
            const color = `${this.$vuetify.theme.themes.light.secondary}CC`
            const overlay = RGBAtoCSS(HexToRGBA(color))

            return `to top, ${overlay}, ${overlay}`
        },
        src() {
            return this.$route.meta.src
        },
        minHeight() {
            const height = this.$vuetify.breakpoint.mdAndUp ? '100vh' : '50vh'

            return `calc(${height} - ${this.$vuetify.application.top}px)`
        },
    },
}
</script>
