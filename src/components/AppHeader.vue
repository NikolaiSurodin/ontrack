<template>
    <header class="sticky top-0 z-30 flex items-center justify-between border-b bg-white p-3">
        <AppLogo @click="emit('goToTimeline')" />
        <HeaderProgress @click="emit('goToProgress')" />
    </header>
</template>

<script setup>
import AppLogo from '@/components/AppLogo.vue'
import HeaderProgress from '@/components/HeaderProgress.vue'

const emit = defineEmits( [ 'goToTimeline', 'goToProgress' ] )

</script>

<style scoped>

</style>