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
              at&nbsp;<i
                class="fa-solid fa-location-dot pb-1"
                style="font-size: 0.8em; color: red"
              ></i
              >&nbsp; <strong>{{ p.location }}</strong></span
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
      <YearsOldCount v-if="p.countUp" :title="p.countUpText" :birthday="p.countUp"></YearsOldCount>
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
import Gallery from '@/components/PhotoGallery.vue'
import YearsOldCount from '@/components/TimeCount.vue'
import BaseCard from '@/components/BaseCard.vue'

const { p } = defineProps(['p'])
</script>

<style scoped lang="scss">
.avatar {
  width: 5em;
  height: 5em;
  border-radius: 3em;
}
.created-at {
  // font-size: 1em;
  font-style: italic;
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
