<script>
export default {
  props: {
    imagePath: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: 'Title',
      required: true
    },
    description: {
      type: String,
      default: 'description',
      required: true
    }
  }
}
</script>

<template>
  <div class="max-w-sm rounded overflow-hidden shadow-lg">
    <img class="w-full" :src="imagePath" />
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{{ title }}</div>
      <p class="text-gray-700 text-base">
        {{ description }}
      </p>
    </div>
  </div>
</template>
