<script>
export default {
  emits: ['response'],
  created() {
    this.$emit('response', 'hello from child')
  }
}
</script>

<template>
  <h2 :class="$attrs.class">Child component</h2>
  <slot>Fallback from parent</slot>
</template>