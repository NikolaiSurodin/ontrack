<template>
    <a :href="`#${PAGE_PROGRESS}`" class="text-sm">
        <div class="flex items-center gap-1" v-if="true">
            Day complete!
            <CheckCircleIcon class="h7 text-green-500" />
        </div>
        <div class="flex items-center gap-1" v-else>
            <div>
                Progress: <span class="font-mono">20%</span>
            </div>
            <div class="h-3 w-3 rounded-full bg-red-500"></div>
        </div>
    </a>
</template>
<script setup>
import { CheckCircleIcon } from '@heroicons/vue/24/solid'

import { PAGE_PROGRESS } from '@/const/pages'
</script>