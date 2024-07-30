<template>
  <div class="center">
    <ArticleList :style="{ styleObject, display: ['-webkit-box', '-ms-flexbox', 'flex'] }" class="classOnParent" ref="articleListRef" />
    <div class="row">
      <button @click="addNewArticle">Add New Article</button>
      <button @click="removeLastArticle">Remove Last Article</button>
      <button @click="clearSearchQuery">Clear Search Query</button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import ArticleList from './ArticleList.vue';

export default {
  data() {
    return {
      styleObject: {
        color: 'blue',
        fontSize: '23px'
      }
    }
  },
  components: {
    ArticleList
  },
  setup() {
    const articleListRef = ref(null);

    function addNewArticle() {
      if (articleListRef.value) {
        const newTitle = prompt('Enter new article title:');
        if (newTitle) {
          articleListRef.value.addArticle(newTitle);
        }
      }
    }

    function removeLastArticle() {
      if (articleListRef.value && articleListRef.value.filteredArticles.length > 0) {
        const lastArticle = articleListRef.value.filteredArticles.slice(-1)[0];
        articleListRef.value.removeArticle(lastArticle.id);
      }
    }

    function clearSearchQuery() {
      if (articleListRef.value) {
        articleListRef.value.clearSearch();
      }
    }

    return {
      articleListRef,
      addNewArticle,
      removeLastArticle,
      clearSearchQuery
    };
  }
};
</script>

<style scoped>
.center {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
}

.classOnParent {
  color: blue;
}

.row {
  padding-top: 20px;
}
</style>
