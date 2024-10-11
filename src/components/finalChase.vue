<script setup>
// import { ref } from vue
import timer from './timer.vue';
const props = defineProps({
    stage: Object
})

function toggleHover(e) {
    document.getElementsByClassName('clickedElement')[0].classList.toggle('hover')
}

</script>

<template>
    <div class="grid grid-cols-2 w-full">
        <aside class="grid grid-cols-1 w-96 content-center border-r -mx-96 border-gray-200 px-4 py-6 sm:px-6 lg:px-8">
            <div class="grid">
                <timer timeLimit="45" />
            </div>
        </aside>
        <div class="relative isolate grid grid-cols-1 -mx-64">
            <div class="flip-card clickedElement">
                <div class="flip-card-inner w-[972px] h-[640px] relative">
                    <div class="flip-card-front w-full">
                        <img v-if="props.stage.image" :src="props.stage.image" alt="" class="rounded-md inline"
                            @click="toggleHover" />
                    </div>
                    <div class="flip-card-back w-full">
                        <img v-if="props.stage.backImage" :src="props.stage.backImage" alt="" class="rounded-md inline"
                            @click="toggleHover" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.flip-card {
    position: relative;
}

.flip-card-inner {
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.flip-card.hover .flip-card-inner {
    transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
    position: absolute;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
}

.flip-card-back {
    transform: rotateY(180deg);
}
</style>