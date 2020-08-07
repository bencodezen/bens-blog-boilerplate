<script>
import CategoryCard from '@/components/CategoryCard.vue'
import PostPreviewCard from '@/components/PostPreviewCard.vue'

export default {
  components: {
    CategoryCard,
    PostPreviewCard
  }
}
</script>

<template>
  <div class="container mx-auto px-32 text-center">
    <h1>Spotlight</h1>
    <PostPreviewCard
      imagePath="placeholder_thumbnail.png"
      title="RL Newsletter 1: On the Sample Complexity of Reinforcment Learning"
      preview="Lorem ipsum dolor sit"
      linkTo="/blog"
    />
    <h1>Sections</h1>
    <div id="catbox" class="flex flex-wrap items-center">
      <div id="col1" class="w-1/3 px-1 py-1 ml-auto">
        <CategoryCard
          title="RL Newsletter"
          description="Review of recent publications in Reinforcement Learning"
        />
      </div>
      <div id="col2" class="w-1/3 px-1 py-1">
        <CategoryCard
          title="Slow Papers"
          description="In-depth review of foundational (and) or interesting papers"
        />
      </div>
      <div id="col3" class="w-1/3 px-1 py-1 mr-auto">
        <CategoryCard title="Blog" description="Personal Blog" />
      </div>
    </div>
    <div id="allpost">
      <nuxt-link to="/blog">
        All posts
      </nuxt-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../styles/_settings.scss';

h1 {
  font-family: $ff-sans;
  font-size: 2rem;
  padding-top: 1.2em;
  padding-bottom: 1.2em;
}

#allpost {
  padding-top: 1.5em;
  font-size: 1rem;
  font-style: italic;
  text-decoration: underline;
  &:hover {
    color: $c-primary;
  }
}

@media screen and (max-width: 768px) {
  #catbox {
    align: center;
  }
  #col1 {
    width: 100%;
  }
  #col2 {
    width: 100%;
  }
  #col3 {
    width: 100%;
  }
}
</style>
