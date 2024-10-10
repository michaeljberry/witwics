<script setup>
import { CheckIcon } from '@heroicons/vue/20/solid'

const props = defineProps({
  answers: Object
})

function compileAnswerId(key, link = false) {
  if (!link) return `answer${key}`
  return `#answer${key}`
}

function toggleAnswer(answer, key) {
  if (answer.correct) {
    document.getElementById(compileAnswerId(key)).querySelector('.checkmark').classList.toggle('correct')
  } else {
    document.getElementById(compileAnswerId(key)).classList.toggle('bg-gray-400')
    document.getElementById(compileAnswerId(key)).classList.toggle('bg-white')
  }
}
</script>

<template>
  <ul role="list" class=" divide-gray-100 grow text-center">
    <li v-for="(answer, key) in props.answers" :key="key" :id="compileAnswerId(key)"
      class="flex grow gap-x-4 py-5 my-4 px-4 bg-white rounded-lg hover:bg-indigo-400">
      <CheckIcon class="h-6 w-5 flex-none text-indigo-600 hover:text-white-100 checkmark" aria-hidden="true" />
      <div class="min-w-0" @click="toggleAnswer(answer, key)">
        <p v-if="answer.type != 'headToHead'" class="text-sm font-semibold leading-6 text-gray-900">{{ answer.option }}
        </p>
      </div>
    </li>
  </ul>
</template>

<style scoped>
.checkmark {
  display: none;
}

.checkmark.correct {
  display: block;
}
</style>