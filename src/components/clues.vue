<script setup>
const props = defineProps({
    clues: Array
})
console.log(props.clues)
</script>

<template>
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div v-for="(clue, key) in props.clues" :key="key"
            class="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400">
            <div class="min-w-0 flex-1">
                <span class="absolute inset-0" aria-hidden="true" />
                <p class="text-sm font-medium text-gray-900">{{ clue }}</p>
            </div>
        </div>
    </div>
</template>