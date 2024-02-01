<template>
  <div class="row" :style="`height: ${gridHeight}px`">
    <div class="col grid-1-2 bg" :style="bgStyle(items[0])"></div>
    <div class="col grid-1-2">
      <div class="row grid-1-4">
        <div class="col bg" :style="bgStyle(items[1])"></div>
      </div>
      <div class="row grid-1-4">
        <div class="col bg" :style="bgStyle(items[2])"></div>
      </div>
    </div>
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
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  cursor: pointer;
  border-radius: 0.5em;
  border: 0.2em solid white;
}
.grid-1-2 {
  height: 100%;
}
.grid-1-4 {
  height: 50%;
}
</style>
