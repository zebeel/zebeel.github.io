<template>
  <div class="photo-show">
    <div
      class="gallery-modal d-flex flex-column justify-content-center align-items-center"
      @click="photoShowClick"
    >
      <ImageItem :image-url="image"></ImageItem>
    </div>
    <div class="close-x" @click="hideImage"><i class="fas fa-times"></i></div>
    <div class="next p-3" @click="next" v-if="items.length > 1">
      <i class="fas fa-chevron-right"></i>
    </div>
    <div class="previous p-3" @click="previous" v-if="items.length > 1">
      <i class="fas fa-chevron-left"></i>
    </div>
    <div class="info">
      <span align="center">{{ index + 1 }} of {{ items.length }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import ImageItem from '@/components/ImageItem.vue'
import { ref, computed, defineEmits } from 'vue'

const emit = defineEmits(['hidePhoto'])
const { items } = defineProps(['items', 'cw', 'id'])
const index = ref(0)

const image = computed(() => {
  return items[index.value]
})

const next = () => {
  index.value === items.length - 1 ? (index.value = 0) : index.value++
}
const previous = () => {
  index.value === 0 ? (index.value = items.length - 1) : index.value--
}
const hideImage = () => {
  emit('hidePhoto')
}
const photoShowClick = (e: MouseEvent) => {
  const target = e.target as HTMLTextAreaElement
  if (target.localName != 'img') emit('hidePhoto')
}
</script>

<style scoped>
.gallery-modal {
  position: fixed;
  top: 0;
  left: 0;
  background-color: #000000e0;
  height: 100%;
  width: 100%;
  z-index: 1;
}
img {
  max-height: 95%;
  max-width: 98%;
  border-radius: 0.5em;
}
.close-x {
  position: fixed;
  top: 1em;
  right: 1em;
  z-index: 2;
  cursor: pointer;
  color: #e9ecef;
}
.next {
  position: fixed;
  top: 48%;
  right: 0.1em;
  z-index: 2;
  cursor: pointer;
  color: #e9ecef;
  font-size: 2em;
}
.previous {
  position: fixed;
  top: 48%;
  left: 0.1em;
  z-index: 2;
  cursor: pointer;
  color: #e9ecef;
  font-size: 2em;
}
.info {
  position: fixed;
  bottom: 0;
  left: 48%;
  z-index: 2;
  color: #e9ecef;
  font-size: 0.8em;
}
</style>
