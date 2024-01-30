<template>
  <base-card>
    <div class="container post" :id="`post-${p.id}`">
      <div class="d-flex mb-1 pt-2">
        <div class="avatar-area">
          <img :src="p.avatar" class="avatar" />
        </div>
        <div class="flex-row ms-2">
          <div class="user-info">
            <strong>{{ p.by }}</strong>
            <span v-if="p.location">
              at&nbsp;<i class="fa-solid fa-location-dot" style="font-size: 0.8em; color: red"></i>&nbsp;
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
      <CountUp v-if="p.countUp" :countUpTitle="p.countUpText" :startTimestamp="p.countUp"></CountUp>
      <YearsOldCount
        v-if="p.ageCount"
        :title="p.ageCountTitle"
        :birthday="p.ageCount"
      ></YearsOldCount>
      <gallery v-if="p.images && p.images.length > 0" :items="p.images"></gallery>
    </div>
  </base-card>
</template>

<script>
import Gallery from './Gallery.vue'
import CountUp from './CountUp.vue'
import YearsOldCount from './YearsOldCount.vue'
import BaseCard from '@/components/ui/BaseCard.vue'
import { constants } from '@/libs/constants'
import moment from 'moment'
export default {
  name: 'blog-post',
  components: { Gallery, CountUp, BaseCard, YearsOldCount },
  props: ['p'],
  data() {
    return {
      canShow: false,
      post: {},
      reactClick: 0,
      canReact: true,
      canComment: false,
      countUpData: { days: 0, hours: 0, minutes: 0, seconds: 0 }
    }
  },
  created() {
    Object.assign(this.post, this.p)
    this.canComment = !!this.post.canComment
    this.canReact = !!this.post.canComment
    this.countUp()
  },
  methods: {
    react() {
      this.reactClick++
      if (this.canReact) {
        const data = { postID: this.p.id, count: this.reactClick }
        this.reactClick = 0
        this.canReact = false
        this.axios.post(`${constants.server_root}/posts/react`, data).then((res) => {
          if (res.data.status) {
            console.log(`Reacted! #${this.p.id}`)
            this.post.reaction = res.data.reaction
          }
          this.canReact = true
        })
      }
    },
    comment() {
      this.canComment = !this.canComment
    },
    commentSuccess(data) {
      this.post.comments.push(data)
    },
    formatDate(date) {
      return moment(date).format('YYYY-MM-DD h:mm A')
    },
    formatBy(by) {
      const pieces = by.split(' ')
      const convertedPieces = []
      for (const s of pieces) {
        convertedPieces.push(s.slice(0, 1).toUpperCase() + s.slice(1))
      }
      return convertedPieces.join(' ')
    },
    countUp() {
      if (!this.p.countUp) return
      const that = this
      const from = new Date(this.p.countUp)
      const from_ms = from.getTime()
      setInterval(function () {
        const now = new Date()
        const current_ms = now.getTime()
        const diff = current_ms - from_ms
        const seconds = Math.floor((diff / 1000) % 60),
          minutes = Math.floor((diff / (1000 * 60)) % 60),
          hours = Math.floor((diff / (1000 * 60 * 60)) % 24),
          days = Math.floor(diff / (1000 * 60 * 60 * 24))
        that.countUpData = { days, hours, minutes, seconds }
      }, 1000)
    }
  }
}
</script>

<style scoped lang="scss">
.avatar {
  width: 5em;
  height: 5em;
  border-radius: 3em;
}
.user-info {
  font-size: 1.5em;
}
.created-at {
  font-size: 1em;
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
