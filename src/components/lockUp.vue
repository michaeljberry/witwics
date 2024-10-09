<script setup>
import question from '@/components/question.vue'
import clues from '@/components/clues.vue'
import answers from '@/components/answers.vue'

const props = defineProps({
    stage: Object
})

function toggleHover(e) {
    e.target.classList.toggle('hover')
}

</script>

<template>
    <ul role="list" class="grid grid-cols-1 gap-6 lg:grid-cols-4">
        <li v-for="(place, key) in props.stage.places" :key="key"
            class="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow">
            <div class="flex flex-col p-8 flip-card" @click="toggleHover">
                <div class="flip-card-inner">
                    <div class="flip-card-front place-content-center px-4">
                        <img v-if="place?.image" class="mx-auto h-32 w-32 flex-shrink-0 rounded-full" :src="place.image"
                            alt="" />
                        <h3 class="text-sm font-medium text-gray-900">{{ place.location }}</h3>
                        <dl class="mt-1 flex flex-grow flex-col justify-between">
                            <dd class="text-sm text-gray-500">{{ place.description }}</dd>
                        </dl>
                    </div>
                    <div class="flip-card-back place-content-center">
                        <img v-if="!place?.item" class="mx-auto h-48 w-48 rounded-full" src="/footsteps.jpg" alt="" />
                        <img v-else-if="place.item == 'warrant'"
                            class="mx-auto h-48 w-48 rounded-full object-scale-down" src="/warrant.jpg" alt="" />
                        <img v-else-if="place.item == 'crook'" class="mx-auto h-48 w-48 rounded-full object-scale-down"
                            src="/slyfox.jpeg" alt="" />
                    </div>
                </div>
            </div>
        </li>
    </ul>
</template>

<style scoped>
.flip-card {
    background-color: transparent;
    width: 300px;
    height: 270px;
    perspective: 1000px;
}

.flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
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
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
}

.flip-card-front {
    color: black;
}

.flip-card-back {
    color: white;
    transform: rotateY(180deg);
}
</style>