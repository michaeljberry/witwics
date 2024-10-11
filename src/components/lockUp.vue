<script setup>
const props = defineProps({
  stage: Object
})

function toggleHover(id) {
  document.getElementById(id).querySelector('.flip-card').classList.toggle('hover')
}

</script>

<template>
  <div class="">
    <ul role="list" class="grid grid-cols-4 gap-4">
      <li v-for="(place, key) in props.stage.places" :key="key" :id="key" @click.capture="toggleHover(key)"
        class="col-span-1 divide-y divide-gray-200 rounded-lg bg-white text-center shadow clickedElement">
        <div class="flip-card justify-center w-auto h-auto p-4 m-4 grid">
          <div class="flip-card-inner h-48 w-48 m-4 grid">
            <div class="flip-card-front grid self-center">
              <img v-if="place?.image" class="mx-auto h-24 w-1/2 rounded-full" :src="place.image" alt="" />
              <h3 class="text-sm font-medium text-gray-900">{{ place.location }}</h3>
              <dl class="mt-1">
                <dd class="text-sm text-gray-500">{{ place.description }}</dd>
              </dl>
            </div>
            <div class="flip-card-back">
              <img v-if="!place?.item" class="mx-auto h-48 w-48 rounded-full" src="/footsteps.jpg" alt="" />
              <img v-else-if="place.item == 'warrant'" class="mx-auto h-48 w-48 rounded-full object-scale-down"
                src="/warrant.jpg" alt="" />
              <img v-else-if="place.item == 'crook'" class="mx-auto h-48 w-48 rounded-full object-scale-down"
                src="/slyfox.jpeg" alt="" />
              <img v-else-if="place.item == 'loot'" class="mx-auto h-48 w-48 rounded-full object-scale-down"
                src="/loot.jpeg" alt="" />
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.flip-card {
  background-color: transparent;
  /* min-width: 300px;
  min-height: 300px; */
  perspective: 1000px;
}

.flip-card-inner {
  position: relative;
  /* width: 100%;
  height: 100%; */
  /* text-align: center; */
  transition: transform 0.6s;
  transform-style: preserve-3d;
  /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); */
}

.flip-card.hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  /* width: 100%;
  height: 100%; */
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