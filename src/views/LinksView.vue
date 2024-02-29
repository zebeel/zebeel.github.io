<script setup lang="ts">
import WelcomeItem from '../components/WelcomeItem.vue'
import IconHeart from '../components/icons/IconHeart.vue'
import IconBook from '../components/icons/IconBook.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <IconHeart />
    </template>
    <template #heading
      ><a href="https://zebeel.github.io/memories/my-lil-sis-wedding.html"
        >Khánh & Trâm's wedding</a
      ></template
    >
    <p>
      I deeply regret not being able to return home to attend your wedding due to the COVID-19
      pandemic. I hope this website will preserve the significant moments of your married life.
    </p>
  </WelcomeItem>
  <WelcomeItem>
    <template #icon>
      <IconBook />
    </template>
    <template #heading>
      <router-link to="/baby-books">Baby books</router-link>
    </template>
    <p>Tổng hợp audio sách, nhạc hay cho bé.</p>
  </WelcomeItem>
</template>
