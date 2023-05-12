<template>
    <AppHeader
            @go-to-timeline="goTo( PAGE_TIMELINE )"
            @go-to-progress="goTo( PAGE_PROGRESS )"
    />
    <main class="flex-col flex-grow flex">
        <Timeline
            v-show="currentPage === PAGE_TIMELINE"
            :timeline-items="timelineItems"
        />
        <Activites
            v-show="currentPage === PAGE_ACTIVITES"
        />
        <Progress
            v-show="currentPage === PAGE_PROGRESS"
        />
    </main>
    <MainFooter
            :current-page="currentPage" @navigate="goTo( $event )"
    />

</template>

<script setup>
import { normalizeHashPage, generateTimelineItems } from '@/functions/functions'
import { PAGE_ACTIVITES, PAGE_PROGRESS, PAGE_TIMELINE } from '@/const/pages'

import AppHeader from '@/components/AppHeader.vue'
import MainFooter from '@/components/MainFooter.vue'
import Timeline from '@/components/pages/Timeline.vue'
import Activites from '@/components/pages/Activites.vue'
import Progress from '@/components/pages/Progress.vue'

import { ref } from 'vue'


const currentPage = ref( normalizeHashPage() )

const timelineItems = generateTimelineItems()




function goTo( page ) {
    console.log(page)
    currentPage.value = page
}
</script>

<style scoped>

</style>