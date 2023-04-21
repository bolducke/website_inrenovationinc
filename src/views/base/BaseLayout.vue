<template>
<div class="bg">
    <TheHeader />

    <v-main>
      <router-view />
    </v-main>

    <TheFooter />
    </div>
</template>

<script>
import TheHeader from "@/views/base/components/Header";
import TheFooter from "@/views/base/components/Footer";

export default {
  name: "Layout",
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>

<style lang="scss">
.bg {
    background-image: url("https://cdn.pixabay.com/photo/2016/11/29/07/29/batch-1868104_1280.jpg");
    background-repeat: repeat-y;
    background-position: center;
    background-size: cover;
}
</style>