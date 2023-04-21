<template>
<v-navigation-drawer bottom color="transparent" fixed height="auto" overlay-color="secondary" overlay-opacity=".6" temporary v-bind="$attrs" v-on="$listeners">
    <v-list color="white" shaped>
        <v-list-item v-for="({name, to},i) in items" :key="name" :to="{'name': to }" :exact="i === 0" color="primary">
            <v-list-item-content>
                <v-list-item-title v-text="name" />
            </v-list-item-content>
        </v-list-item>
        <v-list-item>
            <v-list-item-content>
                <v-btn id="nav-lang" text :ripple="false" @click="next" class="justify-start pl-0">{{peekNext}}</v-btn>
            </v-list-item-content>
        </v-list-item>
    </v-list>
</v-navigation-drawer>
</template>

<script>
import locales from "@/mixins/locales";

export default {
    name: 'MainNavigationDrawer',
    mixins: [locales],

    props: {
        items: {
            type: Array,
            default: () => ([]),
        },
    },
}
</script>

<style>
#nav-lang {
    justify-content: start;
}
</style>
