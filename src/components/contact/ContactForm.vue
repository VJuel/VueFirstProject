<template>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Name: {{ form.name }}</label>
        <!-- Equivalent -->
        <!-- <input
            :value="text"
            @input="event => text = event.target.value"> -->
        <input type="text" id="name" v-model="form.name" required />
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="form.email" required />
      </div>
      <div class="form-group">
        <label for="message">Message:</label>
        <textarea id="message" v-model="form.message" required></textarea>
      </div>
      <button type="submit">Send Message</button>
    </form>
    <div v-if="submitted">
      <p>Thank you for your message, {{ form.name }}. We will get back to you soon.</p>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    name: 'ContactForm',
    setup() {
      const form = ref({
        name: '',
        email: '',
        message: ''
      });
  
      const submitted = ref(false);
  
      const submitForm = () => {
        // Logic to handle form submission, such as sending data to a server
        console.log('Form submitted:', form.value);
        submitted.value = true;
        // Clear the form
        form.value = {
          name: '',
          email: '',
          message: ''
        };
      };
  
      return {
        form,
        submitted,
        submitForm
      };
    }
  };
  </script>
  
  <style scoped>
  .form-group {
    margin-bottom: 1rem;
  }
  
  label {
    display: block;
    margin-bottom: 0.5rem;
  }
  
  input,
  textarea {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button {
    display: block;
    width: 100%;
    padding: 0.75rem;
    border: none;
    background-color: #007bff;
    color: white;
    font-size: 1rem;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  
  p {
    text-align: center;
    margin-top: 1rem;
    color: green;
  }
  </style>
  