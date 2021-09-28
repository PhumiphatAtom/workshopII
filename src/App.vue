<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <!-- <faculty/>
    <test/> -->
    <!-- <Employee/> -->
    <teamTele/>
  </div>
</template>

<script>
import Vue from "vue";
// import HelloWorld from './components/HelloWorld.vue';
// import faculty from './components/faculty.vue';
import {BootstrapVue , IconsPlugin} from 'bootstrap-vue';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
// import test from './components/test.vue';
// import Employee from './components/employee.vue';
import teamTele from './components/teamtele.vue';


Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
export default {
  name: 'App',
  components: {
    // HelloWorld,
    // faculty,
    // test,
    // Employee,
    teamTele
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
