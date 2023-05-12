<template>
    <nav class="sticky bottom-0 bg-white">
        <ul class="flex items-center justify-around border-t">
            <NavigationItem
                    v-for="( icon,page ) in NAV_ITEMS"
                    :key="page"
                    :href="`#${page}`"
                    :class="{ 'bg-gray-200': page === currentPage }"
                    @click="emit('navigate', page)"
            >
                <component
                        :is="icon"
                        class="h-7 w-7"
                />
                {{ page }}
            </NavigationItem>
        </ul>
    </nav>
</template>

<script setup>
import NavigationItem from '@/components/NavigationItem.vue'
import { NAV_ITEMS } from '@/const/navigation'

defineProps( [ 'currentPage' ] )
const emit = defineEmits( [ 'navigate' ] )


</script>

<style scoped>

</style>