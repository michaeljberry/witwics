<script setup>
import { onMounted, onUpdated } from 'vue'
import { useStepStore } from '@/stores/step.js'

const props = defineProps({
  currentPath: {
    type: String,
  }
})

const store = useStepStore()

store.$subscribe((mutation, state) => {
  console.log('mutation')
  console.log(mutation)
  console.log('state')
  console.log(state)
})

function getStepStatus(step) {
  console.log(step)
}

// complete, current, upcoming
function updateStepStore() {
  for (const [key, step] of Object.entries(store.steps)) {
    // console.log(store.steps[key])
    if (store.steps[key].href === props.currentPath) {
      // console.log('active')
      // console.log(step)
      store.steps[key].status = 'current'
      // console.log(store.steps[key].status)
    } else if (store.steps[key].status === 'current') {
      console.log('previous')
      console.log(step)
      store.steps[key].status = 'complete'
      console.log(store.steps[key])
    }
  }
}

onMounted(() => {
  updateStepStore()
})

onUpdated(() => {
  updateStepStore()
})

</script>

<template>
  <nav class="flex items-center justify-center" aria-label="Progress">
    <!-- <p class="text-sm font-medium">Step {{ store.steps.findIndex((step) => {
      indicateCurrentPage(); return step.status ===
        'current'
    }) + 1 }} of {{
        steps.length }}</p> -->
    <ol role="list" class="ml-8 flex items-center space-x-5">
      <li v-for="step in store.steps" :key="step.name">
        <a v-if="step.status === 'complete'" :href="step.href"
          class="block h-2.5 w-2.5 rounded-full bg-indigo-600 hover:bg-indigo-900">
          <span class="sr-only">{{ step.name }}</span>
        </a>
        <a v-else-if="step.status === 'current'" :href="step.href" class="relative flex items-center justify-center"
          aria-current="step">
          <span class="absolute flex h-5 w-5 p-px" aria-hidden="true">
            <span class="h-full w-full rounded-full bg-indigo-200" />
          </span>
          <span class="relative block h-2.5 w-2.5 rounded-full bg-indigo-600" aria-hidden="true" />
          <span class="sr-only">{{ step.name }}</span>
        </a>
        <a v-else :href="step.href" class="block h-2.5 w-2.5 rounded-full bg-gray-200 hover:bg-gray-400">
          <span class="sr-only">{{ step.name }}</span>
        </a>
      </li>
    </ol>
  </nav>
</template>