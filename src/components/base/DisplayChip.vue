<template>
<v-chip disabled>
    <slot />
</v-chip>
</template>

<script>
export default {
    name: 'BaseDisplayChip',
}
</script>

<style lang="scss" scoped>
.v-chip--disabled {
    opacity: 1;
}
</style>
