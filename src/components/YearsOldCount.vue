<template>
  <div class="years-old-count">
    <div class="row">
      <div class="col text-center">
        <span>{{ title }}</span>
      </div>
    </div>
    <div class="row">
      <div class="col text-center">
        <span>{{ yearsOldText }}</span>
      </div>
    </div>
  </div>
</template>

<script>
const DateDiff = {
  inSeconds: function (d1, d2) {
    const t2 = d2.getTime()
    const t1 = d1.getTime()

    return parseInt((t2 - t1) / 1000)
  },

  inMinutes: function (d1, d2) {
    const t2 = d2.getTime()
    const t1 = d1.getTime()

    return parseInt((t2 - t1) / 60000)
  },

  inHours: function (d1, d2) {
    const t2 = d2.getTime()
    const t1 = d1.getTime()

    return parseInt((t2 - t1) / 3600000)
  },

  inDays: function (d1, d2) {
    const t2 = d2.getTime()
    const t1 = d1.getTime()

    return parseInt((t2 - t1) / (24 * 3600 * 1000))
  },

  inWeeks: function (d1, d2) {
    const t2 = d2.getTime()
    const t1 = d1.getTime()

    return parseInt((t2 - t1) / (24 * 3600 * 1000 * 7))
  },

  inMonths: function (d1, d2) {
    const d1Y = d1.getFullYear()
    const d2Y = d2.getFullYear()
    const d1M = d1.getMonth()
    const d2M = d2.getMonth()

    return d2M + 12 * d2Y - (d1M + 12 * d1Y)
  },

  inYears: function (d1, d2) {
    return d2.getFullYear() - d1.getFullYear()
  }
}
export default {
  props: ['title', 'birthday'],
  data() {
    return {
      yearsOldText: ''
    }
  },
  created() {
    const today = new Date()
    const birthdayDate = new Date(this.birthday)
    const years = DateDiff.inYears(birthdayDate, today)
    const months = DateDiff.inMonths(birthdayDate, today) % 12
    const days = DateDiff.inDays(birthdayDate, today)
    this.yearsOldText = `${years} ${years > 0 ? 'years' : 'year'} ${months} ${months > 0 ? 'months' : 'month'} (${days} ${days > 0 ? 'days' : 'day'})`
    console.log(years, months, days, this.yearsOldText)
  }
}
</script>

<style scoped lang="scss">
.years-old-count {
  font-family: "Aleo", serif;
  text-shadow: 2px 2px 4px #6c757d;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin-bottom: 1rem;
  span {
    font-size: 1.8em;
    // color: #6c757d;
  }
  .count-number {
    font-size: 1.6em;
  }
  .count-text {
    font-size: 1em;
  }
}
</style>
