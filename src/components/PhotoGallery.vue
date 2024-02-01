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

<script setup lang="ts">
import Grid1 from './grid/GridType1.vue'
import Grid2 from './grid/GridType2.vue'
import Grid3 from './grid/GridType3.vue'
import Grid3Plus from './grid/GridType3Plus.vue'
import PhotoShow from './PhotoShow.vue'
import { ref, onMounted } from 'vue'

const { items } = defineProps(['items'])
const currentWidth = ref(0)
const isShowPhoto = ref(false)

onMounted(() => {
  currentWidth.value = document.getElementById('gallery')?.offsetWidth ?? 0
})

const showPhoto = (val: boolean) => {
  isShowPhoto.value = val
}

const hidePhoto = () => {
  isShowPhoto.value = false
}
</script>

<style scoped></style>
