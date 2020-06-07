<script>
export default {
  props: {
    icon: {
      type: String,
      required: true
    }
  },
  computed: {
    iconPath() {
      return require(`../assets/icons/${this.icon}.svg`)
    }
  }
}
</script>

<template>
  <div class="flex items-center">
    <img
      v-if="icon"
      :class="$style.iconLabelImage"
      :src="iconPath"
      :alt="`${icon} icon`"
      class="mr-2"
    />
    <slot></slot>
  </div>
</template>

<style lang="scss" module>
.iconLabelImage {
  width: 30px;
}
</style>
