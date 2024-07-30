<script>
import ChildElement from './ChildElement.vue'

export default {
  components: {
    ChildElement
  },
  // declare emitted events
  emits: ['response'],
  created() {
    // emit with argument
    this.$emit('response', 'hello from child')
  },
  data() {
    return {
      childMsg: 'No child msg yet',
      parent: 'from parent'
    }
  }
}
</script>

<template>
  <ChildElement @response="(msg) => childMsg = msg">
    <p>test</p>
  </ChildElement>
  <p>{{ childMsg }}</p>
</template>