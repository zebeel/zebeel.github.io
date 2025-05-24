<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
</script>

<template>
  <div class="home">
    <header>
      <img alt="Vue logo" class="logo" src="@/assets/profile-image.png" width="200" />

      <div class="wrapper">
        <HelloWorld
          msg="Call me Le"
          slogan="End-to-end digital solutions by a full-stack developer and bridge system engineer."
        />
        <nav>
          <RouterLink to="/home">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
          <RouterLink to="/links">Links</RouterLink>
          <RouterLink to="/blog">Blog</RouterLink>
        </nav>
      </div>
    </header>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped lang="scss">
.home {
  display: grid;
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  font-weight: normal;
  font-family: 'Dosis', sans-serif;

  header {
    line-height: 1.5;
    max-height: 100vh;
  }

  .logo {
    display: block;
    margin: 0 auto 2rem;
    border-radius: 3rem;
  }

  nav {
    width: 100%;
    font-size: 1rem;
    text-align: center;
    margin-top: 2rem;
  }

  nav a.router-link-exact-active {
    color: var(--color-text);
  }

  nav a.router-link-exact-active:hover {
    background-color: transparent;
  }

  nav a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
  }

  nav a:first-of-type {
    border: 0;
  }

  @media (min-width: 1024px) {
    header {
      display: flex;
      place-items: center;
      padding-right: calc(var(--section-gap) / 2);
    }

    .logo {
      margin: 0 2rem 0 0;
    }

    header .wrapper {
      display: flex;
      place-items: flex-start;
      flex-wrap: wrap;
      font-family: 'Dosis', sans-serif;
      font-optical-sizing: auto;
      font-style: normal;
    }

    nav {
      text-align: left;
      margin-left: -1rem;
      font-size: 1rem;

      padding: 1rem 0;
      margin-top: 1rem;
    }
  }
}
@media (min-width: 1024px) {
  .home {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }
}
</style>
