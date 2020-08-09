<script>
import BlogPostList from '~/components/BlogPostList'

export default {
  components: {
    BlogPostList
  },
  async asyncData({ $content }) {
    const posts = await $content('blog').fetch()

    return {
      posts
    }
  }
}
</script>

<template>
  <div class="content">
    <h1>RL Newsletters</h1>
    <BlogPostList :list="posts" />
  </div>
</template>

<style lang="scss">
@import '../../styles/_settings.scss';

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
</style>
