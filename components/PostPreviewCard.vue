<script>
export default {
  props: {
    imagePath: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: 'Insert title',
      required: true
    },
    datePublished: {
      type: String,
      default: 'Insert title',
      required: true
    },
    preview: {
      type: String,
      default: 'Insert preview',
      required: true
    },
    linkTo: {
      type: String,
      default: '/',
      required: true
    }
  }
}
</script>

<template>
  <nuxt-link :to="linkTo">
    <div
      id="previewcard"
      class="border-2 w-full lg:max-w-full lg:flex object-center text-left shadow-lg hover:shadow bg-white"
    >
      <div class="mb-6 mx-6 justify-center object-center">
        <div
          id="title"
          class="text-gray-900 font-bold text-2xl mb-2 text-center my-4"
        >
          {{ title }}
        </div>
        <p class="text-gray-700 text-center italic">
          {{ datePublished }}
        </p>
        <div class="my-8 w-full flex flex-row">
          <img class="object-contain h-36 w-1/3 sm:w-full" :src="imagePath" />
          <p class="text-gray-700 text-base w-2/3 sm:w-full">
            {{ preview }}
          </p>
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<style lang="scss">
#title {
  font-family: 'Roboto';
}
</style>
