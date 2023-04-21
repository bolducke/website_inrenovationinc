<i18n>
{
  "en": {
    "meta": "About" 
  },
  "fr": {
    "meta": "À propos"
  }
}
</i18n>

<script>
  // Extensions
  import View from '@/views/View'

  // Mixins
  import LoadSections from '@/mixins/load-sections'

  export default {
    name: 'ContactUs',

    metaInfo() {return { title: this.$i18n.t('meta') } },

    extends: View,

    mixins: [
      LoadSections([
        'HeroAlt',
        'WhoWeAre',
        'WeirdFlexButOk',
        'WhatWeDo',
        'KeepInTouchAlt',
      ]),
    ],

    props: {
      id: {
        type: String,
        default: 'contact-us',
      },
    },
  }
</script>
