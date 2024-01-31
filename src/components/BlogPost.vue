<template>
  <base-card>
    <div class="container post" :id="`post-${p.id}`">
      <div class="d-flex align-items-center mb-1 pt-2">
        <div class="avatar-area">
          <img :src="p.avatar" class="avatar" />
        </div>
        <div class="flex-row ms-2">
          <div class="user-info">
            <strong>{{ p.by }}</strong>
            <span v-if="p.location">
              at&nbsp;<i class="fa-solid fa-location-dot pb-1" style="font-size: 0.8em; color: red"></i>&nbsp;
              <strong>{{ p.location }}</strong></span
            >
            <span v-if="p.with">
              with <strong>{{ p.with }}</strong></span
            >
          </div>
          <div class="created-at"><i class="far fa-calendar-alt"></i> {{ p.at }}</div>
        </div>
      </div>
      <div class="d-flex post-content">
        <p v-html="p.content"></p>
      </div>
      <YearsOldCount
        v-if="p.countUp"
        :title="p.countUpText"
        :birthday="p.countUp"
      ></YearsOldCount>
      <YearsOldCount
        v-if="p.ageCount"
        :title="p.ageCountTitle"
        :birthday="p.ageCount"
      ></YearsOldCount>
      <gallery v-if="p.images && p.images.length > 0" :items="p.images"></gallery>
    </div>
  </base-card>
</template>

<script setup lang="ts">
import Gallery from './Gallery.vue'
import YearsOldCount from './YearsOldCount.vue'
import BaseCard from '@/components/ui/BaseCard.vue'
import { defineProps } from 'vue'

defineProps(['p']);
</script>

<style scoped lang="scss">
.avatar {
  width: 5em;
  height: 5em;
  border-radius: 3em;
}
// .user-info {
//   font-size: 1.5em;
// }
.created-at {
  // font-size: 1em;
  font-style: italic;
}
.like-icon {
  color: #e60e99;
  font-size: 1.2em;
  font-weight: bold;
  text-shadow: 0px 0px 4px rgb(249 0 249 / 75%);
}
.like-icon:hover {
  color: #ff1294;
  transform: scale(1.3);
}
/* .like-icon:after {
  content: "❤️";
  color: #ff1294;
  text-shadow: 0px 0px 4px rgb(249 0 249 / 75%);
  position: absolute;
  padding-top: 10%;
  padding-left: 10%;
  margin-left: -20px!important;
  margin-top: -90%;
  opacity: 0;
  transition: all 2s;
  transform: scale(1.1);
} */
/* .like-icon:active:after {
  padding: 0;
  margin: 0;
  opacity: 1;
  transition: 0s
} */
.comment-icon {
  color: grey;
  font-size: 1.2em;
  font-weight: bold;
}
.comment-icon:hover {
  color: gainsboro;
}
.heart-count {
  color: #e60e99;
  padding: 0 0.1em;
  font-size: 0.8em;
}
.grin-count {
  color: #ff07b1;
  padding: 0 0.1em;
}
.ok-count {
  color: #0d6efd;
  padding: 0 0.1em;
}
.commented-at {
  font-size: 0.7em;
}
.comment-row {
  border-radius: 0.4em;
  /* border: 1px #e9ecef solid; */
  /* box-shadow: 1px 2px 2px #adb5bd; */
  /* box-shadow: 0 1px 5px rgba(0, 0, 0, 0.26); */
  border-left: 2px #e9ecef solid;
  border-right: 2px #e9ecef solid;
}
.comment-by {
  font-weight: bold;
  color: #41464b;
}
.comment-avatar img {
  border-radius: 2em;
  height: 2em;
  width: 2em;
}
.post {
  animation: fadein 2s;
  -moz-animation: fadein 2s; /* Firefox */
  -webkit-animation: fadein 2s; /* Safari and Chrome */
  -o-animation: fadein 2s; /* Opera */
}
@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@-moz-keyframes fadein {
  /* Firefox */
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@-webkit-keyframes fadein {
  /* Safari and Chrome */
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@-o-keyframes fadein {
  /* Opera */
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
