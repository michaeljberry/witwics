<script setup>
// import { ref } from vue
const props = defineProps({
  stage: Object
})

function toggleHover(e) {
  document.getElementsByClassName('clickedElement')[0].classList.toggle('hover')
}

</script>

<template>
  <div>
    <div class="w-full grid">
      <div class="flip-card clickedElement">
        <div class="flip-card-inner">
          <div class="flip-card-front place-content-center grid">
            <img v-if="props.stage.image" :src="props.stage.image" alt=""
              class="rounded-md bg-white/5 h-auto w-4/5 justify-self-center" @click="toggleHover" />
          </div>
          <div class="flip-card-back place-content-center grid">
            <img v-if="props.stage.backImage" :src="props.stage.backImage" alt=""
              class="rounded-md bg-white/5 h-auto w-4/5 justify-self-center" @click="toggleHover" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.flip-card {
  background-color: transparent;
  position: relative;
  /* width: 300px;
  height: 270px; */
  /* perspective: 1000px; */
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