<script>
export default {
  async asyncData(ctx) {
    const page = await ctx.$content(`rl_newsletter/${ctx.params.slug}`).fetch()
    return {
      page
    }
  }
}
</script>

<template>
  <main>
    <article class="content">
      <h1 id="category" class="text-base">{{ page.category }}</h1>
      <h1 class="blog-title">{{ page.title }}</h1>
      <h3 class="text-gray-600 mt-4 mb-8 text-italics">
        {{ page.datePublished }}
      </h3>
      <nuxt-content :document="page" />
    </article>
  </main>
</template>

<style lang="scss">
@import '../../styles/_settings.scss';

#category {
  color: $c-primary;
  font-family: $ff-sans;
  @apply font-bold;
  @apply text-5xl;
  @apply mb-4;
}

.blog-title {
  font-family: $ff-sans;
  color: $c-navy;
  @apply font-bold;
  @apply text-3xl;
  @apply mt-8;
}

.content {
  @apply mx-auto;
  @apply px-8;
  max-width: 1000px;
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
    list-style-position: outside;
    @apply list-decimal;
    @apply list-inside;
    @apply mb-4;
  }
}

.katex .mfrac .frac-line {
  display: inline-block;
  width: 100%;
  border-bottom-style: solid;
  border-color: #000;
}
</style>
