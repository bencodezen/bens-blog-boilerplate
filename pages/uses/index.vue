<script>
export default {
  async asyncData({ $content }) {
    const page = await $content('uses').fetch()

    return {
      page
    }
  }
}
</script>

<template>
  <article class="container mx-auto content pt-10">
    <nuxt-content :document="page" />
  </article>
</template>

<style lang="scss">
@import '../../styles/_settings.scss';

.nuxt-content {
  a {
    color: $c-primary;

    &:hover {
      text-decoration: underline;
    }
  }

  h1,
  h2 {
    font-family: $ff-sans;
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    line-height: 42px;
    letter-spacing: 0.299664px;
    color: #2599e2;
    @apply mb-2;

    &:nth-child(n + 2) {
      @apply mt-8;
    }
  }

  h1 {
    font-size: 32px;
  }

  h3 {
    font-family: $ff-sans;
    @apply font-bold;
    @apply text-xl;
    @apply mt-3;
    @apply mb-2;
  }

  ul {
    @apply mt-3 mb-3 ml-6;
    @apply list-disc;
    font-family: PT Serif;
    @apply text-lg;
  }

  li {
    line-height: 1.6;
  }

  p {
    font-family: PT Serif;
    @apply text-lg;
  }
}
</style>
