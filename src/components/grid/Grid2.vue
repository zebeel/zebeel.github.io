<template>
  <div class="row" :style="`height: ${gridHeight}px`">
    <div class="col grid-1-2 bg" :style="bg(items[0])"></div>
    <div class="col grid-1-2 bg" :style="bg(items[1])"></div>
  </div>
</template>

<script>
export default {
  name: 'Grid2',
  props: ['items', 'cw'],
  computed: {
    gridHeight() {
      // const w = screen.width >= 1440 ? 1440 : screen.width;
      // const h = w * 17 / 375 - screen.width / 100;
      // return h < 17 ? 17 : h > 50 ? 50 : h;
      return this.cw
    }
  },
  methods: {
    bg(img) {
      return `background-image: url('${img}');`
    }
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
  border-radius: 0.5em;
  border: 0.2em solid white;
}
.grid-1 {
  height: 100%;
}
</style>
