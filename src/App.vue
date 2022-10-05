<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
import VRViewer from './VRViewer.vue'

const routes = {
  '/VR': VRViewer
}

import {ref} from 'vue';

const count = ref<number>(0);
const increment = () => count.value++;


</script>

<template>

  <div>
    <div id="app">

      <div id="nav">
        <button @click="$router.push('VR')" class="btn btn-primary">Click to enter VR</button>
      </div>
      <a href="https://vitejs.dev" target="_blank">
        <img src="./assets/metaops-cyberpunk.png" class="object-fill" alt="Metaops logo"/>
      </a>
      <HelloWorld msg="Vite + Vue"/>

      <button class="btn" @click="count++">Cyberpunk count is: {{ count }}</button>

    </div>
    <router-view :key="$route.path"></router-view>
  </div>


</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
