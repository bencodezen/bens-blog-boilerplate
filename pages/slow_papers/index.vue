<script>
import BlogPostList from '~/components/BlogPostList'

export default {
  components: {
    BlogPostList
  },
  async asyncData({ $content }) {
    const posts = await $content('slow_papers').fetch()

    return {
      posts
    }
  }
}
</script>

<template>
  <div class="content text-center w-full">
    <div class="w-full">
      <h1>Slow Papers</h1>
      <p>In-depth review of foundational and (or) interesting papers!</p>
      <BlogPostList :list="posts" />
    </div>
  </div>
</template>

<style lang="scss">
@import '../../styles/_settings.scss';
.content {
  width: 100%;
}

h1 {
  font-family: $ff-sans;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 42px;
  letter-spacing: 0.299664px;
  color: #2599e2;
  @apply mb-2;

  &:nth-child(n + 2) {
    @apply mt-8;
  }
}
</style>
