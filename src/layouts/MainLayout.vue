<script setup>
import Header from './Header.vue';
import Footer from './Footer.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <div>
    <Header />
      <router-view />
      <!-- <div id="another-app-container">
        <div id="another-app"></div> 
      </div> --> <!-- Conteneur pour AnotherApp -->
    <Footer />
  </div>
</template>

<style scoped>
main {
  flex: 1;
  display: flex;
  flex-direction: column;
}
</style>
