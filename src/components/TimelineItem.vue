<template>
    <div class="mt-7">
        <ul>
            <li class="relative flex flex-col gap-2 border-t border-gray-200 py-10 px-4">
                <a :class="hourLinkClasses" href="#"> {{ timeline.hour }}:00 </a>
                <div class="flex gap-2">
                    <button class="rounded bg-gray-100 p-3 enabled:hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-50">
                        <XMarkIcon class="h-4" />
                    </button>
                    <select class="w-full truncate rounded bg-gray-100 py-1 px-2 text-2xl" name="" id="">
                        <option selected disabled value="">Rest</option>
                        <option
                                :value="value"
                                :key="value"
                                v-for="{ value, label } in options">
                            {{ label }}
                        </option>
                    </select>
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { XMarkIcon } from '@heroicons/vue/24/outline'


const props = defineProps( [ 'timeline' ] )
let style = props.timeline.hour === new Date().getHours() ? 'bg-purple-900 font-black text-white' : 'bg-gray-100 text-gray-500'


const hourLinkClasses = [
    'absolute -top-4 left-1/2 -translate-x-1/2 rounded px-2 font-mono text-lg text-center',
    style
]

const options = [
    {
        value: 1,
        label: 'Coding'
    },
    {
        value: 2,
        label: 'Reading'
    },
    {
        value: 1,
        label: 'Training'
    }
]

</script>


<style scoped>

</style>