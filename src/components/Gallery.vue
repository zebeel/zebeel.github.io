<template>
  <div id="gallery">
    <Grid1
      :items="items"
      :cw="currentWidth"
      v-if="items.length === 1"
      @click="showPhoto(true)"
    ></Grid1>
    <Grid2
      :items="items"
      :cw="currentWidth"
      v-if="items.length === 2"
      @click="showPhoto(true)"
    ></Grid2>
    <Grid3
      :items="items"
      :cw="currentWidth"
      v-if="items.length === 3"
      @click="showPhoto(true)"
    ></Grid3>
    <Grid3Plus
      :items="items"
      :cw="currentWidth"
      v-if="items.length > 3"
      @click="showPhoto(true)"
    ></Grid3Plus>
    <PhotoShow
      :items="items"
      :cw="currentWidth"
      v-if="isShowPhoto"
      @hide-photo="hidePhoto"
    ></PhotoShow>
  </div>
</template>

<script>
import Grid1 from './grid/Grid1.vue'
import Grid2 from './grid/Grid2.vue'
import Grid3 from './grid/Grid3.vue'
import Grid3Plus from './grid/Grid3Plus.vue'
import PhotoShow from './PhotoShow.vue'
export default {
  name: 'blog-gallery',
  props: ['items'],
  components: {
    Grid1,
    Grid2,
    Grid3,
    Grid3Plus,
    PhotoShow
  },
  data() {
    return {
      index: null,
      currentWidth: 0,
      isShowPhoto: false
    }
  },
  mounted() {
    this.currentWidth = document.getElementById('gallery').offsetWidth
  },
  methods: {
    showPhoto(val) {
      this.isShowPhoto = val
    },
    hidePhoto() {
      this.isShowPhoto = false
    }
  }
}
</script>

<style scoped></style>
