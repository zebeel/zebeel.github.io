<template>
  <div class="blog">
    <Header></Header>
    <Timeline></Timeline>
  </div>
</template>

<script setup lang="ts">
import Header from '../components/Header.vue'
import Timeline from '../components/Timeline.vue'
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Aleo:ital,wght@0,100..900;1,100..900&display=swap');
.blog {
  @import '../../node_modules/bootstrap/dist/css/bootstrap';
  font-family: 'Aleo', serif;
  font-weight: 500;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: white;
  border-radius: 0.5em;
  padding: 0.5em;
  margin: auto;
  box-shadow: 0 0 2px 2px white;
}
</style>
