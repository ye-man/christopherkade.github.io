<template>
  <section class="index-wrapper">
    <ul class="article-list">
      <li
        v-for="article in articles"
        :key="article.title"
        class="article">
        <ArticleLink
          :article="article"
        />
      </li>
    </ul>
  </section>
</template>

<script>
import ArticleLink from '@/components/ArticleLink'
import articleList from '@/static/articleList.json'

export default {
  components: {
    ArticleLink
  },
  data() {
    return {
      articles: articleList
    }
  }
}
</script>

<style lang="scss">
.index-wrapper {
  padding: 25px 450px 100px 450px;
}

.article-list {
  padding: 0;
}

.article {
  list-style-type: none;
  padding: 2rem;
}

@media only screen and (max-width: 1500px) {
  .index-wrapper {
    padding-left: 18.75rem;
    padding-right: 18.75rem;
  }
}

@media only screen and (max-width: 1280px) {
  .index-wrapper {
    padding-left: 9.375rem;
    padding-right: 9.375rem;
  }
}

@media only screen and (max-width: 1060px) {
  .index-wrapper {
    padding-left: 6.25rem;
    padding-right: 6.25rem;
  }

  .article {
    padding: 1.5rem;
  }
}

@media only screen and (max-width: 720px) {
  .index-wrapper {
    padding-left: 0px;
    padding-right: 0px;
  }

  .article {
    padding: 1rem;
  }
}
</style>
