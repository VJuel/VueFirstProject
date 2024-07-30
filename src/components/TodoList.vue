<template>
  <div :style="background">
    <h2 :style="{ color: title }">Todo List</h2>
    <ul>
      <!-- Utilisation de <template v-for> pour itérer sur les tâches -->
      <template v-for="todo in todos" :key="todo.id">
        <li v-if="!todo.isComplete">
          {{ todo.name }}
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TodoList',
  data() {
    return {
      todos: [
        { id: 1, name: 'Learn Vue.js', isComplete: false },
        { id: 2, name: 'Build a project', isComplete: true },
        { id: 3, name: 'Read Vue documentation', isComplete: false },
        { id: 4, name: 'Write a blog post', isComplete: true },
        { id: 5, name: 'Create a portfolio', isComplete: false }
      ],
      background: { backgroundColor: "#FDFDFD", padding: "10px 30px" },
      title: "#000"
    };
  }
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}

li {
  color: #000;
  padding: 8px;
  margin: 4px 0;
  border-radius: 4px;
}
</style>
