<template>
    <header>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/contact">Contact</router-link>
        <router-link to="/test">Test</router-link>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: 'Header',
  };
  </script>
  
  <style>
  /* Styles pour le header */
  header {
    background-color: #333;
    color: white;
    padding: 1rem;
    width: 100%;
  }
  nav a {
    margin-right: 1rem;
    color: white;
    text-decoration: none;
  }
  </style>
  