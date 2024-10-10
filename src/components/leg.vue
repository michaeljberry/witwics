<script setup>
import question from '@/components/question.vue'
import clues from '@/components/clues.vue'
import answers from '@/components/answers.vue'

const props = defineProps({
  stage: Object
})
console.log(props.stage.answers)

</script>

<template>
  <div>
    <div class="w-full grid">
      <img v-if="props.stage.celebrityImage" :src="props.stage.celebrityImage" alt=""
        class="rounded-md bg-white/5 h-auto w-4/5 justify-self-center" />
    </div>
    <div class="w-full grid">
      <img v-if="props.stage.image" :src="props.stage.image" alt=""
        class="rounded-md bg-white/5 h-auto w-4/5 justify-self-center" />
    </div>
    <question :question="props.stage.question"></question>
    <div class="my-4">
      <clues v-if="props.stage?.clues?.length" :clues="props.stage.clues"></clues>
    </div>
    <div class="shadow">
      <answers v-if="props.stage?.answers" :answers="props.stage.answers"></answers>
    </div>
  </div>
</template>