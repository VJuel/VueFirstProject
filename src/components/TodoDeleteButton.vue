<script>
export default {
  name: 'TodoDeleteButton',
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  methods: {
    deleteItem() {
      this.$emit('delete', this.id);
    }
  }
};
</script>

<template>
  <button @click="deleteItem">
    Delete
  </button>
</template>

<style scoped>
button {
  background-color: red;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
}
</style>
