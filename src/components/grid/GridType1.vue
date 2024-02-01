<template>
  <div class="row">
    <div class="col grid-1-1 p-0 pointer">
      <img :src="items[0]" />
    </div>
  </div>
</template>

<script setup lang="ts">
const { items } = defineProps(['items', 'cw'])
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
.grid-1-1 {
  height: 100%;
}
img {
  width: 100%;
  border-radius: 0.5em;
  border: 0.2em solid white;
}
</style>
