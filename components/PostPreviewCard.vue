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
      class="border-2 border-gray-200 max-w-sm w-full lg:max-w-full lg:flex lg:rounded-t text-left shadow-lg hover:shadow"
    >
      <div
        class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l verflow-hidden content-center"
      >
        <img :src="imagePath" />
      </div>
      <div
        class="border-l border-dashed lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"
      >
        <div class="mb-8">
          <div class="text-gray-900 font-bold text-xl mb-2">
            {{ title }}
          </div>
          <p class="text-gray-700 text-base">
            {{ preview }}
          </p>
        </div>
      </div>
    </div>
  </nuxt-link>
</template>
