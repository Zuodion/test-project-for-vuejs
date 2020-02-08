<template>
<div id="app">
  <router-view />
  <dialogs/>
</div>
</template>

<script>

import Dialogs from './components/Dialogs';
export default {
  name: 'App',
  components: {
    dialogs: Dialogs
  }
}
</script>

<style>
body, #app, html {
  height: 100%;
}
body {
  margin: 0;
  padding: 0;
  font-family: Helvetica Neue, sans-serif; 
  font-size: 14px;
}

button {
  cursor: pointer;
  border: none;
}

* {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
</style>
