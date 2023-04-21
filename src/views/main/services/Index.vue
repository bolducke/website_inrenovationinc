<i18n>
{
  "en": {
    "title": "Services",
    "description": "Rénovation Montréal I.N inc let you do all kind of renovation for your kitchen, your bathroom, your basement, the exterior, commercial and institutional, urban heritage and carpentry."
  },
  "fr": {
    "title": "Services",
    "description": "Rénovation Montréal I.N inc vous permet de faire toutes sortes de rénovations que ce soit en général, pour la cuisine, pour la salle de bain, pour le sous-sol, pour l'extérieur, pour les commerces et institutions, pour des batîments patrimoniales et pour la menuiserie."
  }
}
</i18n>

<script>
// Extensions
import View from "@/views/View";

// Mixins
import LoadSections from "@/mixins/load-sections";

export default {
  name: "Services",

  metaInfo() {
    return {
      title: this.$i18n.t("title"),
      meta: [{ name: "description", content: this.$i18n.t("description") }],
    };
  },

  extends: View,

  mixins: [
    LoadSections(["HeroAlt", "Services", "ContactUs", "KeepInTouchAlt"]),
  ],

  props: {
    id: {
      type: String,
      default: "services",
    },
  },
};
</script>
