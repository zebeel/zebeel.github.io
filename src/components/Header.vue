<template>
  <div class="container" id="top-header">
    <header
      class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-1"
    >
      <a href="#" class="d-flex align-items-center col mb-1 mb-md-0 text-dark text-decoration-none">
        <div class="logo" @click="gotoHomepage">torapapa</div>
      </a>
    </header>
  </div>
</template>

<script>
export default {
  name: 'blog-header',
  data() {
    return {}
  },
  methods: {
    gotoHomepage: () => {
      // this.$router.push({ name: 'home' })
    }
  }
}
</script>

<style scoped lang="scss">
.logo {
  color: #41464b;
  font-size: 1.3em;
  font-family: 'Pacifico', cursive;
}
</style>
