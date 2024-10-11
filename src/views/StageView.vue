<script setup>
import { ref, onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';
import { questions, getStageInfo } from '@/assets/questions'
import leg from '@/components/leg.vue'
import lightningRound from '@/components/lightningRound.vue'
import wager from '@/components/wager.vue'
import lockUp from '@/components/lockUp.vue'
import headToHead from '@/components/headToHead.vue'
import finalChase from '@/components/finalChase.vue'

const route = useRoute();
const stageInfo = ref()

function loadStageInfo() {
    const stage = route.params.stage
    stageInfo.value = questions[stage]
}

function loadStage(stage) {
    if (stage.type == 'leg') return leg
    if (stage.type == 'lightningRound') return lightningRound
    if (stage.type == 'wager') return wager
    if (stage.type == 'lockUp') return lockUp
    if (stage.type == 'headToHead') return headToHead
    if (stage.type == 'finalChase') return finalChase
}

onBeforeMount(() => {
    loadStageInfo()
})
</script>

<template>
    <component :is="loadStage(stageInfo)" :stage="stageInfo">
    </component>
</template>