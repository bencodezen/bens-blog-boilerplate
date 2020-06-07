<script>
const SECONDS_IN_MINUTE = 60
const MINUTES_IN_HOUR = 60
const HOURS_IN_DAY = 24

export default {
  props: {
    deadline: {
      type: Date,
      required: true
    }
  },
  data() {
    return {
      currentTime: Date.now()
    }
  },
  computed: {
    daysLeft() {
      return Math.floor(
        this.timeRemaining /
          (SECONDS_IN_MINUTE * MINUTES_IN_HOUR * HOURS_IN_DAY)
      )
    },
    hoursLeft() {
      return Math.floor(
        (this.timeRemaining / (SECONDS_IN_MINUTE * MINUTES_IN_HOUR)) %
          HOURS_IN_DAY
      )
    },
    minutesLeft() {
      return Math.floor(
        (this.timeRemaining / SECONDS_IN_MINUTE) % MINUTES_IN_HOUR
      )
    },
    secondsLeft() {
      return this.timeRemaining % SECONDS_IN_MINUTE
    },
    timeRemaining() {
      return Math.round((this.deadline - this.currentTime) / 1000)
    }
  },
  mounted() {
    setInterval(() => {
      this.currentTime = Date.now()
    }, 1000)
  }
}
</script>

<template>
  <div class="flex">
    <p class="time-unit-box">
      <span class="unit">{{ daysLeft }}</span> days
    </p>
    <p class="time-unit-box">
      <span class="unit">{{ hoursLeft }}</span> hours
    </p>
    <p class="time-unit-box">
      <span class="unit">{{ minutesLeft }}</span> minutes
    </p>
    <p class="time-unit-box">
      <span class="unit">{{ secondsLeft }}</span> seconds
    </p>
  </div>
</template>

<style lang="scss" scoped>
@import '../styles/_settings.scss';

.time-unit-box {
  @apply flex flex-col items-center;
  border: 2px solid #2599e2;
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 13px;
  line-height: 24px;
  letter-spacing: 0.299664px;

  color: #232323;
  padding: 6px 10px 14px;
  text-transform: uppercase;
  margin-right: 12px;

  @include breakpoint(600px) {
    padding: 12px 20px 20px;
    font-size: 16px;
  }
}

.unit {
  @apply font-bold;
  font-size: 30px;
  line-height: 1.5;

  @include breakpoint(600px) {
    font-size: 40px;
  }
}
</style>
