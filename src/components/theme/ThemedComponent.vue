<template>
    <div class="center">
      <div :style="[baseStyles, themeStyles]">
        Themed Div
      </div>
      <button @click="toggleTheme">Toggle Theme</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ThemedComponent',
    data() {
      return {
        baseStyles: {
          padding: '10px',
          borderRadius: '5px'
        },
        lightTheme: {
          color: 'black',
          backgroundColor: 'white'
        },
        darkTheme: {
          color: 'white',
          backgroundColor: 'black'
        },
        isDarkMode: false
      };
    },
    computed: {
      themeStyles() {
        return this.isDarkMode ? this.darkTheme : this.lightTheme;
      }
    },
    methods: {
      toggleTheme() {
        this.isDarkMode = !this.isDarkMode;
      }
    }
  };
  </script>
  
  <style scoped>
.center {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
} 

.center > div{
  text-align: center;
  width: 100%;
  padding-bottom: 20px;
} 

.center button{
  margin-top: 20px;
} 
 </style>
  