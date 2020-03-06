<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <Hello msg="blabla~" @add-feature="onAddFeature" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "./components/HelloWorld.vue";
import Hello from "./components/Hello.vue";
import { Feature } from "@/types";

@Component({
  components: {
    HelloWorld,
    Hello
  }
})
export default class App extends Vue {
  onAddFeature(f: Feature) {
    console.log("新增特性：" + f.name);
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
