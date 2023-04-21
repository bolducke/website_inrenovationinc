<i18n>
{
  "en": {
    "credit": "Made by"
  },
  "fr": {
    "credit": "Fait par"
  }
}
</i18n>

<template>
<v-footer id="main-footer" color="grey darken-4" dark min-height="72">
    <v-container>
        <div class="text-center">
            Copyright &copy; {{new Date().getFullYear()}} Montreal Renovation inc | {{$t('credit')}} <span class="text-decoration-underline">Karl-Étienne Bolduc</span>
        </div>
    </v-container>
</v-footer>
</template>

<script>
export default {
    name: 'MainFooter',

    data: () => ({}),
}
</script>

<style lang="sass">
</style>
