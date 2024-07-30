<script>
import TheWelcome from '../components/TheWelcome.vue'
import ParentElement from '../components/ParentElement.vue'
import ParentComponent from '../components/ParentComponent.vue';
import ThemedComponent from '../components/theme/ThemedComponent.vue'
import TodoList from "../components/TodoList.vue";
import { useMouse } from '../lib/hooks/mouse.js'
import { useFetch } from '../lib/hooks/fetch.js'

  export default {
    name: 'HomeView',
    data() {
      return {
        awesome: true,
        toggleHomePage: false,
        isVisible: true,
        parentMessage: 'AllComponents',
        items: [{ message: 'ParentComponent' }, { message: 'ThemedComponent' }, { message: 'blog-post' }, { message: 'V-IF , V-show' }],
        myProfil: {
          name: 'Juhel',
          author: 'Vicktor',
          age: '27'
        },
        color: "#FDFDFD",
        numbers: [1, 2, 3, 4, 5],
        sets: [[ 1, 2, 3, 4, 5 ], [6, 7, 8, 9, 10]],
        name: 'Vue.js'
      }
    },
    components: {
      ParentComponent,
      ThemedComponent,
      TodoList
    },
    methods: {
      handleUpdate() {
        console.log('Post updated');
      },
      toggleVisibility() {
      this.isVisible = !this.isVisible;
      },
      even(numbers) {
        // Soyez prudent avec reverse()et sort()dans un bien calculé Ces deux méthodes vont muter le tableau d'origine, qui doit être évité dans les getters calculés. Créez une copie du tableau original avant d'appeler ces méthodes:
        // diff
        // - return numbers.reverse()
        // + return [...numbers].reverse()
        return numbers.filter(number => number % 2 === 0)
      },
      greet(event) {
      // `this` inside methods points to the current active instance
        alert(`Hello ${this.name}!`)
        // `event` is the native DOM event
        if (event) {
          alert(event.target.tagName)
        }
      },
      alertMessage(message, event) {
        if(event) {
          even.preventDefault()
        }
        alert(message)
      }
    },
    computed: {
      evenNumbers() {
        return this.numbers.filter(n => n % 2 === 0)
      }
    },
    setup() {
      const { x, y } = useMouse()

      // Fetch
      // const { data, error } = useFetch('...')

      // re-fetch when props.id changes
      const { data, error } = useFetch(() => `/posts/${props.id}`)
      return {
        x,
        y,
        data,
        error
      }
    }
  };

</script>

<template>
  <div>
    <template v-if="toggleHomePage">
      <main>
        <div>
          <h2>Render V-For</h2>
          <ul>
            <li v-for="(item, index) in items">
              {{ parentMessage }} - {{ index }} - {{ item.message }}
            </li>
          </ul>
        </div>

        <ParentComponent/>

        <ThemedComponent/>

        <!-- <ParentElement/> -->
        <!-- <TheWelcome/> -->

        <blog-post post-title="Hello, World!" @update-post="handleUpdate"></blog-post>
        
        <button @click="awesome = !awesome">Toggle</button>

        <div>
          <h2 v-if="awesome">V-if!</h2>
          <p v-else>Oh no 😢</p>
          
          <button @click="toggleHomePage = !toggleHomePage">Toggle Home Page</button>
        </div>
        
        <div>
          <h1 v-show="isVisible">V-Show!</h1>
          <button @click="toggleVisibility">Toggle Visibility</button>
        </div>

        <div>
          <h2>My profil</h2>
          <ul>
            <li v-for="value in myProfil">
              {{ value }}
            </li>
          </ul>
        </div>

        <TodoList/>

        <div>
          <ul>
            <li v-for="n in evenNumbers">{{ n }}</li>
          </ul>
          <ul v-for="numbers in sets">
            <li v-for="n in even(numbers)">{{ n }}</li>
          </ul>
        </div>
          
        <div>
          <!-- `greet` is the name of the method defined above -->
          <button @click="greet">Greet</button>
          <!-- using inline arrow function -->
          <button @click="(event) => alertMessage('Form cannot be submitted yet.', event)">
            Submit
          </button>
        </div>


        <h3>Mouse position is at: {{ x }}, {{ y }}</h3>

        <div>
          <h3>Fetch</h3>
          <p>data from Fetch { data, error}</p>
        </div>
      </main>
    </template>

    <template v-else>
      <main>
        <button @click="toggleHomePage = !toggleHomePage">Toggle Home Page</button>
      </main>
    </template>
  </div>
</template>

<style>
main {
  width: 100%;
}
main > div {
  display: flex;
  justify-content: start;
  align-items: start;
  flex-direction: column;
  padding: 70px 0;
}
</style>