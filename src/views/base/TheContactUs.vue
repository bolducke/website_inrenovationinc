<template>
  <div>
    <v-card flat dark>
      <v-img
        class="align-center "
        height="400"
        src="https://images.pexels.com/photos/207456/pexels-photo-207456.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      >
          <v-card-title px-0 class="justify-center text-h4">
            Contactez-nous
          </v-card-title>

      </v-img>
    </v-card>

    <v-container>
      <ContactUs />
    </v-container>
  </div>
</template>

<script>
import ContactUs from "./components/ContactUs";

export default {
  components: {
    ContactUs,
  },
};
</script>