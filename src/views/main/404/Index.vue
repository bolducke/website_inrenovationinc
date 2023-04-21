<i18n>
{
  "en": {
    "title": "Oops! No page found" 
  },
  "fr": {
    "title": "Oups! La page est introuvable"
  }
}
</i18n>

<script>
// Extensions
import View from "@/views/View";

// Mixins
import LoadSections from "@/mixins/load-sections";

export default {
  name: "FourOhFour",

  metaInfo() {
    return { title: this.$i18n.t("title") };
  },

  extends: View,

  mixins: [LoadSections(["404", "ContactUs"])],

  props: {
    id: {
      type: String,
      default: "about",
    },
  },
};
</script>
