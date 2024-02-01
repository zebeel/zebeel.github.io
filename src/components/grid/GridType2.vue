<template>
  <div class="row" :style="`height: ${gridHeight}px`">
    <div class="col grid-1-2 bg" :style="bgStyle(items[0])"></div>
    <div class="col grid-1-2 bg" :style="bgStyle(items[1])"></div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps(['items', 'cw'])

const gridHeight = computed(() => {
  return props.cw
})

const bgStyle = (img: string) => {
  return {
    backgroundImage: `url('${img}')`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    cursor: 'pointer',
    borderRadius: '0.5em',
    border: '0.2em solid white'
  }
}
</script>

<style scoped>
.bg {
  border-radius: 0.5em;
  border: 0.2em solid white;
}
.grid-1 {
  height: 100%;
}
</style>
