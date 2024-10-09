<script setup>
import { ref } from vue
const props = defineProps({
    stage: Object
})


console.log(props.stage.answers)

</script>

<template>
    <div>
        <div class="w-full grid">
            <img v-if="props.stage.image" :src="props.stage.image" alt=""
                class="rounded-md bg-white/5 h-auto w-4/5 justify-self-center" />
        </div>

    </div>
</template>