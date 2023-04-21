<template>
<v-system-bar app dark class="text-sm-title text-caption">
    <v-spacer></v-spacer>
    <div class='mr-1 mr-sm-10' v-for="(info,infoIndex) in businessSliced" :key='infoIndex'>
        <v-icon>{{info.icon}}</v-icon><span v-html='info.text' />
    </div>
    <div class='ml-md-n8'>
        <v-btn text :ripple="false" @click="next" id="lang" class="hidden-sm-and-down caption">{{peekNext}}</v-btn>
    </div>
</v-system-bar>
</template>

<script>
import locales from "@/mixins/locales";

export default {
    name: 'MainSystemBar',
    mixins: [locales],
    data: () => ({}),
    computed: {
        businessSliced() {
            return this.$store.state.business.slice(1, 3)
        }
    }
}
</script>

<style lang="scss">
#lang {
    :hover {
        text-decoration: underline;
    }
}
</style>
