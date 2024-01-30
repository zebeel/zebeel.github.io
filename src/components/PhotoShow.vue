<template>
  <div class="photo-show">
    <div
      class="gallery-modal d-flex flex-column justify-content-center align-items-center"
      @click="photoShowClick"
    >
      <Image :image-url="image" v-touch:swipe="swipeHandler"></Image>
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

<script>
import Image from './Image.vue'
export default {
  name: 'PhotoShow',
  components: {
    Image
  },
  props: ['items', 'cw', 'id'],
  data() {
    return {
      index: null
    }
  },
  created() {
    this.index = this.id ? this.id : 0
  },
  computed: {
    image() {
      return this.items[this.index]
    },
    maxWidth() {
      return this.cw
    }
  },
  methods: {
    next() {
      this.index === this.items.length - 1 ? (this.index = 0) : this.index++
    },
    previous() {
      this.index === 0 ? (this.index = this.items.length - 1) : this.index--
    },
    hideImage() {
      this.$emit('hidePhoto')
    },
    photoShowClick(e) {
      if (e.target.localName != 'img') this.$emit('hidePhoto')
    },
    swipeHandler(e) {
      if (e === 'left') this.next()
      if (e === 'right') this.previous()
    }
  }
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
