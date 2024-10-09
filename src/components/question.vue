<script setup>
import { MagnifyingGlassIcon } from '@heroicons/vue/20/solid'

const props = defineProps({
    question: String
})
</script>

<template>
    <div class="bg-white shadow sm:rounded-lg flex mb-4">
        <MagnifyingGlassIcon class="text-gray-900 flex-none h-12 w-12 my-auto pl-4" />
        <div class="px-4 py-5 sm:p-6 justify-center flex grow">
            <h3 class="text-base font-semibold leading-6 text-gray-900">{{ question }}</h3>
        </div>
    </div>
</template>