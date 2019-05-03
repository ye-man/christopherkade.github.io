<template>
  <section>
    <div :key="$route.params.slug" class="article-slug">
      <div v-html="articleContent"></div>
      <div class="links">
        <nuxt-link
          v-if="prevArticle"
          :to="'/' + prevArticle.path"
          class="prev-link"
        >← {{ prevArticle.title }}</nuxt-link>

        <nuxt-link
          v-if="nextArticle"
          :to="'/' + nextArticle.path"
          class="next-link"
        >{{ nextArticle.title }} →</nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
import articleList from '@/static/articleList.json'

export default {
  data() {
    return {
      article: null,
      prevArticle: null,
      nextArticle: null,
      articleContent: null
    }
  },
  created() {
    this.getArticleData()
  },
  methods: {
    /**
     * Gets data and content of the current, next and previous articles in the article list
     */
    getArticleData() {
      this.article = articleList.filter((a, index) => {
        if (a.path === this.$route.params.slug) {
          this.prevArticle = articleList[index - 1]
          this.nextArticle = articleList[index + 1]
          return a
        }
      })[0]

      // Check if article exists
      if (!this.article) {
        this.$router.push('/')
        return
      }
      this.articleContent = require(`~/static/articles/${this.article.path}.md`)
    }
  },
  head() {
    if (!this.article) return
    return {
      title: this.article.title + ' - Christopher Kade',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.article.title
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.links {
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  margin-top: 2.5rem;
}

.prev-link {
  margin-right: 0.75rem;
  margin-bottom: 0.75rem;
}

.next-link {
  margin-left: 0.75rem;
  margin-bottom: 0.75rem;
}

.prev-link,
.next-link {
  text-decoration: none;
  font-weight: bold;
  color: $highlight-light;
  font-size: 0.9rem;
}

.prev-link:hover,
.next-link:hover {
  opacity: 0.7;
}

.article-slug {
  padding: 25px 450px 100px 450px;
}

.article-slug > h1 {
  font-size: 2rem;
}

p {
  font-weight: $default-font-weight;
}

p > a,
li > a,
h1 > a {
  text-decoration: none;
  font-weight: bold;
  color: $highlight-light;
}

p > a:hover,
li > a:hover {
  opacity: 0.75;
}

code {
  font-size: 1rem;
}

/* Article title */
section > h1 {
  font-size: 2.5rem;
  font-weight: $default-font-weight;
}

/* Article images */
p > img {
  margin: 1rem;
  width: 50%;
  height: 70%;
}

/* Article blockquotes */
blockquote {
  background-color: #eeeeee;
  padding: 0.5rem 1.5rem;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  margin: 2rem 0 2rem 0;
  border-left: 2px solid $highlight-light;
}

@media only screen and (max-width: 1500px) {
  .article-slug {
    padding-left: 18.75rem;
    padding-right: 18.75rem;
  }
}

@media only screen and (max-width: 1280px) {
  .article-slug {
    padding-left: 9.375rem;
    padding-right: 9.375rem;
  }
}

@media only screen and (max-width: 1060px) {
  p > img {
    width: 100%;
    margin: 0;
  }

  .article-slug {
    padding-left: 6.25rem;
    padding-right: 6.25rem;
  }

  code {
    font-size: 0.9rem;
  }
}

/* Smartphones (portrait) ----------- */

@media only screen and (max-width: 720px) {
  .article-slug {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .links {
    justify-content: center;
    flex-wrap: wrap;
    text-align: center;
  }

  p {
    font-weight: $default-font-weight;
  }

  code {
    font-size: 0.8rem;
  }

  section > h1 {
    font-size: 2rem;
  }
}
</style>
