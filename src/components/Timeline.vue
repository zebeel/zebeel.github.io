<template>
  <div id="timeline">
    <div class="ready-area" v-if="ready">
      <Post v-for="p of posts" :key="p.id" :p="p" />
      <div class="w-100 text-center load-more-down pointer" @click="loadPosts" v-if="!allLoaded">
        <i class="fas fa-chevron-down pointer icon"></i>
      </div>
      <ul class="nav justify-content-center" v-if="allLoaded">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="https://zebeel.github.io/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://zebeel.github.io/memories/my-lil-sis-wedding.html"
            >Khánh & Trâm's wedding</a
          >
        </li>
      </ul>
    </div>
    <div class="container loading-area d-flex justify-content-center p-3" v-if="!ready">
      <img src="/images/loading.gif" />
    </div>
    <div class="container loading-area d-flex justify-content-center p-3" v-if="!ready">
      <h4>Keep memories in my own way!</h4>
    </div>
    <div class="clearfix"></div>
  </div>
</template>

<script lang="ts">
import Post from '@/components/BlogPost.vue'
import type PostType from '@/types/Post'
import { posts } from '@/libs/posts'
import { constants } from '@/libs/constants'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'blog-timeline',
  components: { Post },
  data() {
    return {
      posts: [] as PostType[],
      reactions: [],
      comments: [],
      ready: false,
      currentIndex: 0,
      allLoaded: false
    }
  },
  async created() {
    this.ready = true
    this.loadPosts()
  },
  methods: {
    loadPosts() {
      if (this.posts.length < posts.length) {
        const targetPosts: PostType[] = posts.slice(
          this.currentIndex,
          this.currentIndex + constants.post_per_page
        )
        this.posts = this.posts.concat(targetPosts)
        this.currentIndex += constants.post_per_page
        if (this.currentIndex >= posts.length) {
          this.allLoaded = true
        }
      }
    }
  }
})
</script>

<style scoped lang="scss">
.kick-off {
  font-size: 2em;
  font-family: 'Black Ops One', cursive;
}
.loading-area img {
  width: 4em;
  height: 4em;
}
.load-more-down {
  font-size: 2em;
  color: #0a58ca;
}
</style>
