<template>
  <div
    class="w-screen h-screen flex flex-row relative justify-left items-top text-white"
  >
    <NavigationBar />
    <div
      :style="{ 'margin-left': sidebarWidth }"
      class="ease-in-out duration-300 overflow-hidden w-full h-full"
    >
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { mapActions } from "vuex";
import NavigationBar from "./components/NavigationBar.vue";
import { sidebarWidth } from "./store/sidebar/state";

@Options({
  components: {
    NavigationBar,
  },
  data() {
    return { sidebarWidth };
  },
  methods: {
    ...mapActions("userModule", ["verifyAction"]),
    onLoad() {
      this.verifyAction();
    },
  },
  mounted() {
    this.onLoad();
  },
})
export default class App extends Vue {}
</script>

<style></style>
