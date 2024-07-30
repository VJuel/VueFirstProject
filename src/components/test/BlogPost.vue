<template>
    <div class="blog-post">
      <h4>{{ postTitle }}</h4>
      <p>Le button est disabled : {{ isButtonDisabled ? "vrai" : "faux" }}</p>
      <button :disabled="isButtonDisabled" @click="$emit('updatePost')">Update Post</button>
      <button @click="isButtonDisabled = !isButtonDisabled">Switch disabled</button>
      <slot/>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BlogPost',
    props: {
      postTitle: {
        type: String,
        required: true
      }
    },
    emits: ['updatePost'],
    data() {
        return {
            isButtonDisabled: true
        }
    }
  };
  </script>
  
  <style scoped>
  /* Vos styles ici */
  </style>
  