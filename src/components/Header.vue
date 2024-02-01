<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="container" id="top-header">
    <header class="d-flex pt-1">
      <div class="logo" @click="gotoHomepage"><i class="fas fa-house pb-2"></i> torapapa</div>
    </header>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()

const gotoHomepage = () => {
  router.push({ path: '/' })
}
</script>

<style scoped lang="scss">
.logo {
  color: #41464b;
  font-size: 1.3em;
  font-family: 'Pacifico', cursive;
  cursor: pointer;
}
</style>
