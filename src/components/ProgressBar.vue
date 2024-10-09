<script setup>
import { watch, onMounted, onUpdated } from 'vue'
import { useRoute } from 'vue-router';
import { useStageStore } from '@/stores/stage.js'

// const route = useRoute();

// watch(
//   () => route.path,
//   (newPath) => {
//     currentPath.value = newPath
//   }
// )

const props = defineProps({
    currentPath: {
        type: String,
    }
})

const store = useStageStore()

store.$subscribe((mutation, state) => {
    // console.log('mutation')
    // console.log(mutation)
    // console.log('state')
    // console.log(state)
})

function getStageStatus(stage) {
    console.log(stage)
}

// complete, current, upcoming
function updateStageStore() {
    for (const [key, stage] of Object.entries(store.stages)) {
        // console.log(store.stages[key])
        if (store.stages[key].href === props.currentPath) {
            // console.log('active')
            // console.log(stage)
            store.stages[key].status = 'current'
            // console.log(store.stages[key].status)
        } else if (store.stages[key].status === 'current') {
            // console.log('previous')
            // console.log(stage)
            store.stages[key].status = 'complete'
            // console.log(store.stages[key])
        }
    }
}

onMounted(() => {
    updateStageStore()
})

onUpdated(() => {
    updateStageStore()
})

</script>

<template>
    <nav class="flex items-center justify-center" aria-label="Progress">
        <!-- <p class="text-sm font-medium">Stage {{ store.stages.findIndex((stage) => {
      indicateCurrentPage(); return stage.status ===
        'current'
    }) + 1 }} of {{
        stages.length }}</p> -->
        <ol role="list" class="ml-8 flex items-center space-x-5">
            <li v-for="stage in store.stages" :key="stage.name">
                <a v-if="stage.status === 'complete'" :href="stage.href"
                    class="block h-2.5 w-2.5 rounded-full bg-indigo-600 hover:bg-indigo-900">
                    <span class="sr-only">{{ stage.name }}</span>
                </a>
                <a v-else-if="stage.status === 'current'" :href="stage.href"
                    class="relative flex items-center justify-center" aria-current="stage">
                    <span class="absolute flex h-5 w-5 p-px" aria-hidden="true">
                        <span class="h-full w-full rounded-full bg-indigo-200" />
                    </span>
                    <span class="relative block h-2.5 w-2.5 rounded-full bg-indigo-600" aria-hidden="true" />
                    <span class="sr-only">{{ stage.name }}</span>
                </a>
                <a v-else :href="stage.href" class="block h-2.5 w-2.5 rounded-full bg-gray-200 hover:bg-gray-400">
                    <span class="sr-only">{{ stage.name }}</span>
                </a>
            </li>
        </ol>
    </nav>
</template>