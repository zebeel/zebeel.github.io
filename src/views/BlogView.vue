<template>
  <div class="blog">
    <Header></Header>
    <Timeline></Timeline>
  </div>
</template>

<script setup lang="ts">
// TODO convert to typescript
import Header from '../components/Header.vue'
import Timeline from '../components/Timeline.vue'
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Darker+Grotesque:wght@300;400;500;600;700;800;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@200;300;400;500;600;700;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Londrina+Shadow&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Black+Ops+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Sacramento&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Aleo:ital,wght@0,100..900;1,100..900&display=swap');
.blog {
  @import '../../node_modules/bootstrap/dist/css/bootstrap';
  font-family: "Aleo", serif;
  font-weight: 500;
  font-size: 1.5em;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: white;
  // max-width: 600px !important;
  border-radius: 0.5em;
  padding: 0.5em 1em;
  margin: auto;
  .jp {
    // font-family: 'Noto Serif JP', serif;
    // font-size: 0.7em;
  }
}
</style>
