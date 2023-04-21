<i18n>
{
  "en": {
    "title": "Contact Us",
    "description": "Contact Rénovation Montréal I.N inc for a free quote or leave us your comments!"
  },
  "fr": {
    "title": "Nous rejoindre",
    "description": "Contactez Rénovation Montréal I.N inc pour une estimation gratuite ou laissez-nous vos commentaires!"
  }
}
</i18n>

<script>
// Extensions
import View from "@/views/View";

// Mixins
import LoadSections from "@/mixins/load-sections";

export default {
  name: "ContactUs",

  metaInfo() {
    return {
      title: this.$i18n.t("title"),
      meta: [{ name: "description", content: this.$i18n.t("description") }],
    };
  },

  extends: View,

  mixins: [LoadSections(["HeroAlt", "KeepInTouch"])],

  props: {
    id: {
      type: String,
      default: "contact-us",
    },
  },
};
</script>
