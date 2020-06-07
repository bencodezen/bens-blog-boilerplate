<script>
export default {
  props: {
    date: {
      type: String,
      default: ''
    },
    datetime: {
      // Format ISO-8601
      // TODO: Custom validator
      type: String,
      default: ''
    },
    option: {
      type: Number,
      required: true
    },
    time: {
      type: String,
      default: ''
    },
    url: {
      type: String,
      default: ''
    }
  }
}
</script>

<template>
  <div :class="$style.wrapper" class="flex items-center justify-between">
    <div class="pt-2">
      <p v-if="option" :class="$style.option">Option #{{ option }}</p>
      <time :datetime="datetime">
        <span :class="$style.date">{{ date }}</span>
        <span :class="$style.time">{{ time }}</span>
      </time>
      <p :class="$style.metaText">Location: Remote</p>
      <p :class="$style.metaText">Price: $100 USD</p>
    </div>
    <a v-if="url" :class="$style.button" :href="url">Register</a>
  </div>
</template>

<style lang="scss" module>
@import '../styles/_settings.scss';

.button {
  border-radius: 4px;
  background: $c-primary;
  padding: 12px 14px;
  text-transform: capitalize;
  color: white !important;
  font-family: $ff-sans;
  text-transform: uppercase;
}

.date {
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  @apply text-2xl;
  line-height: 20px;
  letter-spacing: 0.0838709px;
  color: #232323;
  @apply block;
  @apply mb-2;
}

.metaText {
  @apply font-bold;
  color: #4d585e;
  font-size: 1rem !important;
}

.option {
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 700;
  font-family: Poppins !important;
  margin-top: 0;
  margin-bottom: 0.5rem;
  color: #555;
}

.time {
  @apply block;
  font-family: Poppins;
  @apply font-medium;
  @apply mb-2;
  @apply text-lg;
}

.wrapper {
  padding: 22px 24px;
  border: 2px solid #d4dce0;

  .time {
    font-family: Poppins;
  }
}
</style>
