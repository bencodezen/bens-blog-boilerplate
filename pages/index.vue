<script>
import CategoryCard from '@/components/CategoryCard.vue'
// import PostPreviewCard from '@/components/PostPreviewCard.vue'

export default {
  components: {
    CategoryCard
    // PostPreviewCard
  }
}
</script>

<template>
  <div class="container mx-auto px-32 text-center">
    <h1><span id="spotlight">Spotlight</span></h1>
    <!-- <PostPreviewCard
      imagePath="placeholder_thumbnail.png"
      title="RL Newsletter 1: Sample Complexity Bounds for Reinforcement Learning"
      datePublished="Published on August 9, 2020"
      preview="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book..."
      linkTo="/rl_newsletter/newsletter1"
    /> -->
    <p class="text-gray-600 text-left text-3xl">Coming Soon!</p>
    <h1><span id="sections">Sections</span></h1>
    <div id="catbox" class="flex flex-wrap items-center">
      <div id="col1" class="w-1/3 px-1 py-1 ml-auto">
        <nuxt-link to="/rl_newsletter">
          <CategoryCard
            title="RL Newsletter"
            description="Review of recent publications in Reinforcement Learning"
          />
        </nuxt-link>
      </div>
      <div id="col2" class="w-1/3 px-1 py-1">
        <nuxt-link to="/slow_papers">
          <CategoryCard
            title="Slow Papers"
            description="In-depth review of foundational (and) or interesting papers"
          />
        </nuxt-link>
      </div>
      <div id="col3" class="w-1/3 px-1 py-1 mr-auto">
        <nuxt-link to="/blog">
          <CategoryCard title="Blog" description="Personal Blog" />
        </nuxt-link>
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
  padding-bottom: 0.3em;
  color: $c-nav-link;
  border-bottom: 2px solid $c-border;
  margin-bottom: 0.8em;

  span {
    border-bottom: 4px solid $c-primary;
    padding-bottom: 0.2em;
  }
}

#spotlight {
  border-bottom: 4px solid #e36f26;
  padding-bottom: 0.2em;
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
