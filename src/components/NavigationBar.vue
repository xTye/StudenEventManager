<template>
  <div class="flex flex-col justify-between bg-black w-60 h-full p-25 text-lg">
    <div class="flex flex-col">
      <router-link :to="'/'"><div class="m-10">Home</div></router-link>
      <router-link :to="'/events'"><div class="m-10">Events</div></router-link>
      <div class="m-10">Clubs</div>
      <div class="m-10">Portal</div>
    </div>
    <div class="flex flex-col">
      <router-link :to="'/login'"><div class="m-10">Login</div></router-link>
      <router-link :to="'/register'"
        ><div class="m-10">Register</div></router-link
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NavigationBar",
});
</script>
