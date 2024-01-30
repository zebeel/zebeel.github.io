<template>
  <div class="base-card">
    <slot></slot>
  </div>
</template>

<style scoped>
@import 'animate.css';
.base-card {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 0.5rem;
  margin: 1rem auto;
  animation: zoomIn;
  animation-duration: 1s;
}
</style>
