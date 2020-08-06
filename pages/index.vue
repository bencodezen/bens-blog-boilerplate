<script>
import CategoryCard from '@/components/CategoryCard.vue'

export default {
  components: {
    CategoryCard
  }
}
</script>

<template>
  <div class="container mx-auto">
    <CategoryCard
      title="RL Newsletter"
      description="Review of recent RL papers"
    />
    <CategoryCard
      title="Privacy and Data Security"
      description="Review of papers on differential privacy and data security"
    />
    <CategoryCard title="Blog" description="Personal Blog" />
  </div>
</template>

<style lang="scss" scoped>
@import '../styles/_settings.scss';
</style>
