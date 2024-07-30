<template>
    <div>
      <ExposeChild ref="childComp" />
      <button @click="accessChild">Access Child Component</button>
    </div>
  </template>
  
  <script>
  import ExposeChild from './ExposeChild.vue';
  
  export default {
    name: 'ExposeParent',
    components: {
      ExposeChild
    },
    methods: {
      accessChild() {
        if (this.$refs.childComp) {
          // Accéder aux propriétés et méthodes exposées
          console.log(this.$refs.childComp.publicData); // 'foo'
          this.$refs.childComp.publicMethod(); // Logs 'This is a public method'
          
          // Les lignes suivantes ne fonctionneront pas car elles ne sont pas exposées
          // console.log(this.$refs.childComp.privateData); // Undefined
          // this.$refs.childComp.privateMethod(); // Error
        }
      }
    }
  }
  </script>
  