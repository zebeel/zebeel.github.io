<template>
  <div class="my-image">
    <img :src="imgsrc" :alt="alt" v-show="loaded" />
    <div class="spinner" v-if="!loaded">
      <div class="dot1"></div>
      <div class="dot2"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
const props = defineProps(['imageUrl', 'alt'])

const imgsrc = ref('')
const loaded = ref(false)

const loadImage = () => {
  const myImage = new Image()
  myImage.src = props.imageUrl
  myImage.onload = () => {
    imgsrc.value = myImage.src
    loaded.value = true
  }
  loaded.value = false
}

watch(
  () => props.imageUrl,
  () => {
    loadImage()
  }
)

onMounted(() => {
  loadImage()
})
</script>

<style scoped>
@import 'animate.css';
.my-image {
  max-height: 95%;
  max-width: 98%;
}
img {
  max-height: 99%;
  max-width: 100%;
  border-radius: 0.5em;
  animation: fadeIn;
  animation-duration: 1s;
}
.spinner {
  margin: 100px auto;
  width: 40px;
  height: 40px;
  position: relative;
  text-align: center;

  -webkit-animation: sk-rotate 2s infinite linear;
  animation: sk-rotate 2s infinite linear;
}
.dot1,
.dot2 {
  width: 60%;
  height: 60%;
  display: inline-block;
  position: absolute;
  top: 0;
  background-color: #212529;
  border-radius: 100%;

  -webkit-animation: sk-bounce 2s infinite ease-in-out;
  animation: sk-bounce 2s infinite ease-in-out;
}

.dot2 {
  top: auto;
  bottom: 0;
  -webkit-animation-delay: -1s;
  animation-delay: -1s;
}

@-webkit-keyframes sk-rotate {
  100% {
    -webkit-transform: rotate(360deg);
  }
}
@keyframes sk-rotate {
  100% {
    transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
  }
}

@-webkit-keyframes sk-bounce {
  0%,
  100% {
    -webkit-transform: scale(0);
  }
  50% {
    -webkit-transform: scale(1);
  }
}

@keyframes sk-bounce {
  0%,
  100% {
    transform: scale(0);
    -webkit-transform: scale(0);
  }
  50% {
    transform: scale(1);
    -webkit-transform: scale(1);
  }
}
</style>
