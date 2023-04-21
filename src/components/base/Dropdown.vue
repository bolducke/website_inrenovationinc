<template>
<v-menu offset-y>
    <template v-slot:activator="{ attrs, on}">
        <v-btn class="pl-2" text v-bind="attrs" v-on="on">
            <v-icon v-if='prependIcon' class="v-icon--left text-decoration-none">{{prependIcon}}</v-icon>
            <span class="text-caption">{{items[internalValue]}}</span>
            <v-icon class="v-icon--right text-decoration-none">{{appendIcon}}</v-icon>
        </v-btn>
    </template>
    <v-list>
        <v-list-item-group mandatory :value="internalValue" @change="$emit('change',$event)">
            <v-list-item v-for="(item, index) in items" :key="index" link>
                <v-list-item-title v-text='item' class="text-uppercase"></v-list-item-title>
            </v-list-item>
        </v-list-item-group>
    </v-list>
</v-menu>
</template>

<script>
export default {
    name: "BaseDropdown",

    inheritAttrs: false,
    model: {
        prop: 'value',
        event: 'change'
    },
    props: {
        items: {
            type: Array,
        },
        prependIcon: {
            type: String
        },
        appendIcon: {
            type: String,
            default: 'mdi-menu-down'
        },
        value: {
            type: Number,
            default: null
        }
    },
    computed: {
        internalValue() {
            return this.value
        }
    },
};
</script>

<style>

</style>
