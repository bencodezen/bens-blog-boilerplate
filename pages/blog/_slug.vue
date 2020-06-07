<script>
export default {
  async asyncData(ctx) {
    const page = await ctx.$content(`blog/${ctx.params.slug}`).fetch()
    return {
      page
    }
  },
  computed: {
    formatPublishDate() {
      const dateFormat = new Date(this.page.date)
      const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }

      return dateFormat.toLocaleDateString('en-US', options)
    }
  }
}
</script>

<template>
  <main>
    <article class="content">
      <p class="blog-publish-date">{{ formatPublishDate }}</p>
      <h1 class="blog-title">{{ page.title }}</h1>
      <nuxt-content :document="page" />
    </article>
  </main>
</template>

<style lang="scss">
@import '../../styles/_settings.scss';

.blog-publish-date {
  @apply mt-12;
  font-family: $ff-sans;
}

.blog-title {
  font-family: $ff-sans;
  color: $c-navy;
  @apply font-bold;
  @apply text-5xl;
  @apply mb-4;
}

.content {
  @apply mx-auto;
  @apply px-8;
  max-width: 740px;
}

.nuxt-content {
  h2 {
    color: $c-navy;
    font-family: $ff-sans;
    @apply font-bold;
    @apply mt-5 mb-5;
    @apply pb-3;
    border-bottom: 1px solid $c-border;
    @apply text-4xl;
    line-height: 1.3;
  }

  p,
  li {
    line-height: 1.7;
    font-size: 16px;
    font-family: $ff-serif;

    @include breakpoint(600px) {
      font-size: 18px;
    }
  }

  p {
    @apply mb-4;
  }

  ul,
  ol {
    @apply list-decimal;
    @apply list-inside;
    @apply mb-4;
  }
}
</style>
