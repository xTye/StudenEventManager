<template>
  <div
    class="w-screen h-screen flex flex-row relative justify-left items-top text-white"
  >
    <NavigationBar />
    <router-view />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import NavigationBar from "./components/NavigationBar.vue";

@Options({
  components: {
    NavigationBar,
  },
})
export default class App extends Vue {}
</script>

<style></style>
