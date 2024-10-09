<script setup>
import question from '@/components/question.vue'
import answers from '@/components/answers.vue'

const props = defineProps({
    stage: Object
})

function compileSlideId(key, link = false) {
    if (!link) return `slide${key}`
    return `#slide${key}`
}

</script>

<template>
    <div class="carousel w-full">
        <div v-for="(question, key) in props.stage.questions" :key="key" :id="compileSlideId(key)"
            class="carousel-item relative w-full">
            <div class="grow grid">
                <div class="grid">
                    <img v-if="question?.image" :src="question?.image" alt=""
                        class="rounded-md bg-white/5 h-auto w-4/5 justify-self-center" />
                </div>
                <div class="">
                    <question :question="question.question" class="w-full text-align-center"></question>
                </div>
                <div class="w-1/2 justify-self-center">
                    <answers v-if="question.answers" :answers="question.answers"></answers>
                </div>
            </div>
            <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a :href="compileSlideId(key - 1, true)" class="btn btn-circle">❮</a>
                <a :href="compileSlideId(key + 1, true)" class="btn btn-circle">❯</a>
            </div>
        </div>
    </div>
</template>