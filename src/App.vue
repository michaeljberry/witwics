<script setup>
import { ref, watch, onUpdated } from 'vue';
import { RouterLink, RouterView, useRoute } from 'vue-router'
import ProgressBar from '@/components/ProgressBar.vue'

const route = useRoute()

const currentPath = ref(route.path)

watch(
  () => route.path,
  (newPath) => {
    currentPath.value = newPath
  }
)
</script>

<template>
  <main class="mx-auto align-items-center w-11/12">
    <RouterView />
  </main>
  <footer class="mx-auto mt-8 max-w-7xl">
    <ProgressBar :currentPath="currentPath" />
  </footer>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>

<style>
@media (min-width: 1024px) {
  #app {
    grid-template-columns: 1fr;
  }
}
</style>