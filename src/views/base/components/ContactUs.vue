<template>
  <v-row align="center" justify="center">
    <v-col cols="12" md=5 align-self="end">
      <v-card width="100%">
        <v-card-title class="text-h4 justify-center">
          <strong>Contactez-nous</strong>
        </v-card-title>


        <v-card-subtitle>Pour nous faire parvenir votre témoignage ou faire la demande d'une soumission</v-card-subtitle>

        <v-card-text>
          <v-form>
            <v-text-field label="Nom" required outlined></v-text-field>

            <v-text-field label="Téléphone" required outlined></v-text-field>

            <v-text-field label="Courriel" required outlined></v-text-field>

            <v-textarea label="Message" outlined></v-textarea>
          </v-form>
        </v-card-text>

        <v-card-actions class="justify-end">
            <v-btn>Envoyer</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<style scoped lang='scss'>
</style>

<script>
export default {};
</script>