import './assets/main.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import TodoDeleteButton from './components/TodoDeleteButton.vue';
import AnotherApp from './AnotherApp.vue'; // Un autre composant racine pour la seconde instance
import BlogPost from './components/test/BlogPost.vue';

// Définir le composant BlogPost avec le template direct
// const BlogPost = {
//   props: ['postTitle'],
//   emits: ['updatePost'],
//   data() {
//     return {
//       isButtonDisabled: true // Initialisation de isButtonDisabled à true
//     };
//   },
//   template: `
//     <div>
//       <h3>{{ postTitle }}</h3>
//       <p></p>
//       <button :disabled="isButtonDisabled" @click="$emit('updatePost')">Update Post</button>    </div>
//   `
// };

// Première instance Vue.js
const app1 = createApp(App);

// Configuration globale des erreurs pour app1
app1.config.errorHandler = (err, vm, info) => {
  console.error(`Error: ${err.toString()}\nInfo: ${info}`);
};

// Enregistrement global de composants pour app1
app1.component('TodoDeleteButton', TodoDeleteButton);
app1.component('BlogPost', BlogPost);

app1.use(router);
app1.mount('#app');

// // Deuxième instance Vue.js (si nécessaire)
// const app2 = createApp(AnotherApp);

// // Configuration globale des erreurs pour app2
// app2.config.errorHandler = (err, vm, info) => {
//   console.error(`Error: ${err.toString()}\nInfo: ${info}`);
// };

// // Enregistrement global de composants pour app2
// app2.component('TodoDeleteButton', TodoDeleteButton);

// // Montre la deuxième instance sur un autre conteneur
// app2.mount('#another-app');
