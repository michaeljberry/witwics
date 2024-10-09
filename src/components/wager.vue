<script setup>
import question from '@/components/question.vue'
import clues from '@/components/clues.vue'

const props = defineProps({
    stage: Object
})
</script>

<template>
    <div>
        <div class="w-full grid">
            <img v-if="props.stage.image" :src="props.stage.image" alt=""
                class="rounded-md bg-white/5 h-auto w-4/5 justify-self-center" />
        </div>
        <question :question="props.stage?.question"></question>
        <clues v-if="props.stage?.clues?.length" :clues="props.stage.clues"></clues>
    </div>
</template>