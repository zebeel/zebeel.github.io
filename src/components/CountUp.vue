<template>
  <div class="count-up">
    <div class="row">
      <div class="col text-center">
        <span>{{ countUpTitle }}</span>
      </div>
    </div>
    <div class="row">
      <!-- <div class="col text-center" v-html="countUpText"> -->
      <div class="col text-center">
        <span class="count-number">{{ countUpData.days }}</span>
        <span class="count-text">{{ countUpData.days > 1 ? 'days' : 'day' }}&nbsp;</span>
        <span class="count-number">{{ countUpData.hours }}</span>
        <span class="count-text">{{ countUpData.hours > 1 ? 'hours' : 'hour' }}&nbsp;</span>
        <span class="count-number">{{ countUpData.minutes }}</span>
        <span class="count-text">{{ countUpData.minutes > 1 ? 'minutes' : 'minute' }}&nbsp;</span>
        <span class="count-number">{{ countUpData.seconds }}</span>
        <span class="count-text">{{ countUpData.seconds > 1 ? 'seconds' : 'second' }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['countUpTitle', 'startTimestamp'],
  data() {
    return {
      countUpData: { days: 0, hours: 0, minutes: 0, seconds: 0 }
    }
  },
  computed: {
    countUpText() {
      return `<span style="font-size:1.6em; font-style:bold; ">${this.countUpData.days}</span> ${this.countUpData.days > 1 ? 'days' : 'day'} 
              <span style="font-size:1.6em; font-style:bold"> ${this.countUpData.hours}</span> ${this.countUpData.hours > 1 ? 'hours' : 'hour'}  
              <span style="font-size:1.6em; font-style:bold"> ${this.countUpData.minutes}</span> ${this.countUpData.minutes > 1 ? 'minutes' : 'minute'}  
              <span style="font-size:1.6em; font-style:bold"> ${this.countUpData.seconds}</span> ${this.countUpData.seconds > 1 ? 'seconds' : 'second'} `
    }
  },
  created() {
    this.countUp()
  },
  methods: {
    countUp() {
      if (!this.startTimestamp) return
      const that = this
      const from = new Date(this.startTimestamp)
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
.count-up {
  font-family: 'Londrina Shadow', cursive;
  text-shadow: 2px 2px 4px #6c757d;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin-bottom: 1rem;
  span {
    font-size: 1.8em;
    color: #ff0000cc;
  }
  .count-number {
    font-size: 1.6em;
  }
  .count-text {
    font-size: 1em;
  }
}
</style>
