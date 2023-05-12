<template>
    <div>
        <TimelineItem
                :timeline="timeline"
                v-for="timeline  in timelineItems"
                :key="timeline.hour"
        />
    </div>

</template>

<script setup>

import TimelineItem from '@/components/TimelineItem.vue'

defineProps( [ 'timelineItems' ] )
</script>

<style scoped>

</style>