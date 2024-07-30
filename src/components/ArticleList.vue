<script>
import { ref } from 'vue';

export default {
  name: 'ArticleList',
  data() {
    return {
      isActive: true,
      activeClass: 'active',
      errorClass: 'text-danger'
    }
  },
  setup() {
    const articles = ref([
      { id: 1, title: 'Article 1' },
      { id: 2, title: 'Article 2' },
      { id: 3, title: 'Article 3' }
    ]);

    const addArticle = (title) => {
      articles.value.push({ id: articles.value.length + 1, title });
    };

    const removeArticle = (id) => {
      articles.value = articles.value.filter(article => article.id !== id);
    };

    const clearSearch = () => {
      articles.value = [];
    };

    return {
      articles,
      addArticle,
      removeArticle,
      clearSearch
    };
  }
};

</script>

<template>
  <div class="center">
    <h1 :class="$attrs.class">List Articles</h1>
    <ul>
      <li
        class="static"
        :class="[isActive ? activeClass : '', errorClass]"
        v-for="article in articles"
        :key="article.id"
      >
        {{ article.title }}
      </li>
    </ul>
  </div>
</template>


<style scoped>*
.center {
  display: flex;
  flex-direction: column;
}
.text-danger {
  color: red;
}
.active {
  font-weight: bold;
}
</style>
