<i18n>
{
    "fr": {
    "subtitle": "Oh!?",
    "text" : "On dirait que la page n'existe pas!!!",
    "btn" : "Partir"
  },
  "en": {
    "subtitle": "Oh!?",
    "text" : "This page doesn't exist",
    "btn" : "Leave"
  }
}
</i18n>

<template>
  <base-section id="404">
    <base-img
      :src="require('@/assets/logo.png')"
      class="mx-auto mb-12"
      contain
      height="100"      
    />

    <base-heading :title="404" />

    <base-subheading
      class="primary--text"
      :title="$t('subtitle')"
    />

    <base-subheading
      space="8"
      :title="$t('text')"    
    />

    <div class="text-center">
      <base-btn :to="{ name: 'Home' }">
        {{$t('btn')}}
      </base-btn>
    </div>
  </base-section>
</template>

<script>
  export default {
    name: 'FourOhFour',

    provide: {
      heading: { align: 'center' },
    },
  }
</script>
