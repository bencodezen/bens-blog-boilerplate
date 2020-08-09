<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>

<template>
  <nuxt-link :to="post.title">
    <div
      id="previewcard"
      class="border-2 w-full lg:max-w-full lg:flex object-center text-left shadow-lg hover:shadow bg-white"
    >
      <div class="mb-6 mx-6 justify-center object-center">
        <div class="text-gray-900 font-bold text-2xl mb-2 text-center my-4">
          {{ post.title }}
        </div>
        <p class="text-gray-700 text-center italic">
          {{ post.datePublished }}
        </p>
        <div class="my-8 w-full flex flex-row">
          <img class="object-contain h-36 w-1/3" :src="imagePath" />
          <p class="text-gray-700 text-base w-2/3">
            {{ post.abstract }}
          </p>
        </div>
      </div>
    </div>
  </nuxt-link>
</template>
