<template>
    <div>
      <p>{{ publicData }}</p>
      <p>{{ privateData }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ExposeChild',
    expose: ['publicData', 'publicMethod'],
    data() {
      return {
        publicData: 'foo',
        privateData: 'bar'
      }
    },
    methods: {
      publicMethod() {
        console.log('This is a public method');
      },
      privateMethod() {
        console.log('This is a private method');
      }
    }
  }
  </script>
  