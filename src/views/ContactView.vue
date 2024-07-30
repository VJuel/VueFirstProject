<template>
  <div class="contact">
    <h1>Contact Us</h1>
    <ContactForm/>
  </div>
</template>

<script>
import ContactForm from "../components/contact/ContactForm.vue";

export default {
  name: 'ContactView',
  components: {
    ContactForm
  }
};
</script>

<style scoped>
.contact {
  margin: 0 auto;
  padding: 1rem;
  border-radius: 8px;
}

h1 {
  text-align: center;
  margin-bottom: 1rem;
}
</style>
