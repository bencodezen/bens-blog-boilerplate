<script>
export default {
  data() {
    return {
      searchQuery: '',
      articles: []
    }
  },
  watch: {
    async searchQuery(searchQuery) {
      if (!searchQuery) {
        this.articles = []
        return
      }
      this.articles = await this.$content('rl_newsletter')
        .limit(6)
        .search(searchQuery)
        .fetch()
    }
  }
}
</script>

<template>
  <div>
    <div class="pt-2 relative mx-auto text-gray-600">
      <input
        v-model="searchQuery"
        autocomplete="off"
        class="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm"
        type="text"
        name="search"
        placeholder="Search Keyword"
      />
      <ul v-if="articles.length">
        <li v-for="article of articles" :key="article.slug">
          <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
            {{ article.title }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>
