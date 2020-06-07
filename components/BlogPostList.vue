<script>
import BlogPostPreview from '~/components/BlogPostPreview'

export default {
  name: 'BlogPostList',
  components: {
    BlogPostPreview
  },
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      displayRange: {
        end: 4
      },
      selectedTag: ''
    }
  },
  computed: {
    filteredList() {
      const props = this.$options.propsData

      if (props) {
        if (props.list && props.list.length > 0) {
          return props.list
            .filter((item) => {
              const isBlogPost = item.path.includes('/blog/')
              const isReadyToPublish = new Date(item.date) <= new Date()
              const hasTags = item.tags && item.tags.includes(this.selectedTag)

              const shouldPublish = this.selectedTag
                ? isBlogPost && isReadyToPublish && hasTags
                : isBlogPost && isReadyToPublish

              if (shouldPublish) {
                return item
              }
            })
            .sort((a, b) => new Date(b.date) - new Date(a.date))
        }
      }

      return false
    }
  },
  methods: {
    loadMore() {
      this.displayRange.end += 5
    },
    updateSelectedTag(tag) {
      this.selectedTag = tag
    }
  }
}
</script>

<template>
  <div class="blog-list__container">
    <div class="blog-list__header">
      <h1 class="blog-list-title">Blog Posts</h1>
    </div>

    <h2 class="blog-list-subtitle">Most Recent</h2>

    <ul class="blog-list">
      <li
        v-for="(item, index) in filteredList"
        :key="`blog-post-${index}`"
        class="blog-list__item"
      >
        <BlogPostPreview
          v-show="index <= displayRange.end"
          :post="item"
          @updateSelectedTag="updateSelectedTag"
        />
      </li>
    </ul>

    <div v-if="displayRange.end <= filteredList.length" class="pagination">
      <button class="button--load-more" type="button" @click="loadMore">
        Load More
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../styles/_settings.scss';

$primary-color: #22aaff;

.blog-list {
  padding: 0;
  margin: 0;
}

.blog-list-subtitle {
  @apply text-3xl;
  @apply font-bold;
  font-family: $ff-sans;
  border-bottom: 1px solid $c-border;
  @apply mb-3;
  @apply pb-1;
}

.blog-list-title {
  @apply text-4xl;
  @apply font-bold;
  font-family: $ff-sans;
  @apply mb-4;
}

.blog-list__container {
  margin-top: 2rem;
}

.blog-list__header {
  display: flex;
  align-items: center;
}

.blog-list__item {
  list-style-type: none;
}

.button--load-more {
  background-color: $primary-color;
  border-radius: 4px;
  border-color: $primary-color;
  color: #fff;
  font-size: 1rem;
  padding: 0.5rem 0.75rem;
  text-transform: uppercase;
  font-weight: 500;
  box-shadow: 0 0;
  cursor: pointer;
  transition: background-color 0.2s ease-in, color 0.2s ease-in;
}

.button--load-more:hover {
  background-color: #fff;
  border: 1px solid $primary-color;
  border-radius: 4px;
  color: $primary-color;
}

.clear-filter-btn {
  align-self: center;
  margin-left: 20px;
}

.filtered-heading {
  display: flex;
}

.pagination {
  text-align: center;
}

.tooltip-ex {
  /* Container for our tooltip */
  position: relative;
  display: inline-block;
  cursor: help;
  margin-right: 20px;
  display: inline-block;
  float: left;
}

.tooltip-ex-bottom {
  top: 135%;
  left: 50%;
  margin-left: -60px;
}

.tooltip-ex-text {
  visibility: hidden;
  position: absolute;
  width: 300px;
  background-color: #555;
  color: #fff;
  text-align: center;
  padding: 20px;
  border-radius: 6px;
  z-index: 1;
  opacity: 0;
  transition: opacity 0.6s;
}

.tooltip-ex:hover .tooltip-ex-text {
  /* Makes tooltip visible when hovered on */
  visibility: visible;
  opacity: 1;
}
</style>
