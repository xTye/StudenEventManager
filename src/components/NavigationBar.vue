<template>
  <div
    class="flex flex-col justify-between bg-black h-full p-25 text-lg float-left fixed z-1 ease-in-out duration-300"
    :style="{ width: sidebarWidth, 'padding-left': 0, 'padding-right': 0 }"
  >
    <div class="flex flex-col justify-center">
      <div
        class="flex justify-center items-center mt-5 w-full"
        @click="toggleSidebar"
      >
        <ArrowLeftIcon :class="{ 'rotate-180': collapsed }" class="h-5 w-5" />
      </div>
      <div v-if="!collapsed">
        <router-link
          :to="'/'"
          class="duration-0 hover:transition hover:duration-300"
          ><div class="m-10">Home</div></router-link
        >
        <router-link
          :to="'/events'"
          class="transition duration-0 hover:transition hover:duration-300"
          ><div class="m-10">Events</div></router-link
        >
        <router-link :to="'/clubs'"><div class="m-10">Clubs</div></router-link>
        <div class="m-10">Portal</div>
      </div>
    </div>
    <div v-if="!collapsed" class="flex flex-col">
      <div v-if="!loggedin">
        <router-link :to="'/login'"><div class="m-10">Login</div></router-link>
        <router-link :to="'/register'"
          ><div class="m-10">Register</div></router-link
        >
      </div>
      <div v-else>
        <router-link :to="'/'" @click="logout"
          ><div class="m-10">Logout</div></router-link
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapGetters } from "vuex";
import { collapsed, toggleSidebar, sidebarWidth } from "../store/sidebar/state";
import { ArrowLeftIcon } from "@heroicons/vue/solid";

export default defineComponent({
  name: "NavigationBar",
  components: { ArrowLeftIcon },
  data() {
    return { collapsed, toggleSidebar, sidebarWidth };
  },
  computed: {
    ...mapGetters("userModule", {
      loggedin: "loggedin",
    }),
  },
  methods: {
    ...mapActions("userModule", ["logoutAction"]),
    logout() {
      this.logoutAction();
    },
  },
});
</script>
