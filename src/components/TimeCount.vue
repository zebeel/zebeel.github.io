<template>
  <div class="time-count">
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

<script setup lang="ts">
interface DateDiffType {
  inSeconds(d1: Date, d2: Date): number
  inMinutes(d1: Date, d2: Date): number
  inHours(d1: Date, d2: Date): number
  inDays(d1: Date, d2: Date): number
  inWeeks(d1: Date, d2: Date): number
  inMonths(d1: Date, d2: Date): number
  inYears(d1: Date, d2: Date): number
}

const DateDiff: DateDiffType = {
  inSeconds: (d1, d2) => (d2.getTime() - d1.getTime()) / 1000,
  inMinutes: (d1, d2) => (d2.getTime() - d1.getTime()) / 60000,
  inHours: (d1, d2) => (d2.getTime() - d1.getTime()) / 3600000,
  inDays: (d1, d2) => Math.round((d2.getTime() - d1.getTime()) / (24 * 3600 * 1000)),
  inWeeks: (d1, d2) => (d2.getTime() - d1.getTime()) / (24 * 3600 * 1000 * 7),
  inMonths: (d1, d2) =>
    d2.getMonth() + 12 * d2.getFullYear() - (d1.getMonth() + 12 * d1.getFullYear()),
  inYears: (d1, d2) => d2.getFullYear() - d1.getFullYear()
}

import { ref } from 'vue'

const { title, birthday } = defineProps(['title', 'birthday'])
const yearsOldText = ref('')

const today = new Date()
const birthdayDate = new Date(birthday)

const years = DateDiff.inYears(birthdayDate, today)
const months = DateDiff.inMonths(birthdayDate, today) % 12
const days = DateDiff.inDays(birthdayDate, today)

yearsOldText.value = `${years} ${years > 0 ? 'years' : 'year'} ${months} ${
  months > 0 ? 'months' : 'month'
} (${days} ${days > 0 ? 'days' : 'day'})`
</script>

<style scoped lang="scss">
.time-count {
  font-family: 'Aleo', serif;
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
