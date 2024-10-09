<script setup>
import { CheckIcon } from '@heroicons/vue/20/solid'

const props = defineProps({
    answers: Object
})
console.log(props.answers)
</script>

<template>
    <ul role="list" class=" divide-gray-100 grow text-center">
        <li v-for="(answer, key) in props.answers" :key="key"
            class="flex grow gap-x-4 py-5 my-4 px-4 bg-white rounded-lg hover:bg-indigo-400">
            <CheckIcon class="h-6 w-5 flex-none text-indigo-600 hover:text-white-100" aria-hidden="true" />
            <div class="min-w-0">
                <p class="text-sm font-semibold leading-6 text-gray-900">{{ answer.option }}</p>
                <!-- <p class="mt-1 truncate text-xs leading-5 text-gray-500">{{ person.email }}</p> -->
            </div>
        </li>
    </ul>
</template>