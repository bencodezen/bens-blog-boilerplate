<script>
export default {
  name: 'BlogPostPreview',
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>

<template>
  <nuxt-link :to="post.path">
    <div
      id="previewcard"
      class="border-2 w-full lg:max-w-full lg:flex object-center text-left shadow-lg hover:shadow bg-white my-2"
    >
      <div class="mb-2 mx-6 flex flex-wrap">
        <div
          class="blog-post__title w-full text-gray-900 font-bold text-2xl mb-2 text-center"
        >
          {{ post.title }}
        </div>
        <time class="blog-post__time text-gray-700 w-full italic text-center">
          {{ post.datePublished }}
        </time>
        <div class="my-8 w-full flex flex-row">
          <img class="object-contain h-36 w-1/3" :src="post.ImagePath" />
          <p
            v-if="post.abstract"
            class="blog-post__abstract text-gray-700 text-base mx-2 w-2/3"
          >
            {{ post.abstract }}
          </p>
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<style lang="scss" scoped>
@import '../styles/_settings.scss';
$primary-color: #22aaff;
.blog-post {
  margin-bottom: 2.5rem;
  box-shadow: 5px 5px 5px 5px;
}

.blog-post__abstract {
  margin-top: 0;
  @apply mb-3;
  font-size: 1.2rem;
}

.blog-post__title {
  margin-top: 0.5rem;
  margin-bottom: 0.75rem;
  @apply font-bold;
  font-family: $ff-sans;
  @apply text-2xl;
}

.blog-post__title {
  font-family: $ff-sans;
}

.tag-list {
  list-style: none;
  padding-left: 0;
  display: flex;
  margin-bottom: 25px;
}
.tag-list__item {
  margin-left: 10px;
}
.tag-list__item:first-child {
  margin-left: 0;
}
.tag-list__btn {
  padding: 5px;
  font-size: 0.9rem;
  background-color: #fff;
}
</style>
