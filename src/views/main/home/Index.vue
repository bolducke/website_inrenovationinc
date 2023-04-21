<i18n>
{
  "en": {
    "title": "Home",
    "description": "Since 2010, Rénovation Montréal I.N inc has served a multitude of customers in the metropolitan area of Montréal with more than 500 projects to date. For all your renovation, expansion or construction projects, Rénovation Montréal I.N inc is at your service!"

  },
  "fr": {
    "title": "Accueil",
    "description": "Depuis 2010, Rénovation Montréal I.N inc a servi de multiples clients dans la grande région de Montréal avec plus de 500 projets à ce jour. Pour tous vos projets de rénovations, d'agrandissement ou de construction, Rénovation Montréal I.N inc est à votre service!"
  }
}
</i18n>

<script>
// Extensions
import View from "@/views/View";

// Mixins
import LoadSections from "@/mixins/load-sections";

export default {
  name: "Home",

  metaInfo() {
    return {
      title: this.$i18n.t("title"),
      meta: [{ name: "description", content: this.$i18n.t("description") }],
    };
  },

  extends: View,

  mixins: [
    LoadSections([
      "Hero",
      "WeirdFlexButOk",
      "WhatWeDo",
      "ContactUs",
      "WhoWeAre",
      "Affiliates",
      "KeepInTouchAlt",
    ]),
  ],

  props: {
    id: {
      type: String,
      default: "home",
    },
  },
};
</script>
