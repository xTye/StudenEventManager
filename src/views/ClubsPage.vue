<template>
  <div class="flex flex-col bg-white w-full h-full text-black">
    <div class="text-4xl text-bold w=full text-center">
      Student Event Manager
    </div>
    <!-- List of events -->
    <button class="bg-black text-white w-full h-50" @click="getAllRsos">
      Testingzxc
    </button>
    <div
      class="flex flex-col bg-blue1 rounded-xl px-5 pt-5 pb-100 w-full h-full"
    >
      <div
        class="flex flex-col w-full h-auto"
        v-for="item in rsos"
        v-bind:key="item.id"
      >
        <div
          class="hover:bg-grey w-full h-auto"
          @click="
            getStudents();
            toggle = true;
          "
        >
          <div class="text-bold text-black border-b-2">{{ item.rsoid }}</div>
          <div>
            <div>{{ item.adminid }}</div>
          </div>
        </div>
        <div v-if="toggle == true">{{ items[0] }}</div>
      </div>
    </div>
    <div
      v-if="loading"
      class="w-40 h-40 z-10 border-t-4 border-b-4 border-green-900 animate-spin"
    ></div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { mapGetters, mapActions } from "vuex";
import { reqCreateRsoModel } from "../models/rsoModel";
//import { reqFindAllPublicEventModel } from "../models/publicEventModel";

@Options({
  data() {
    return {
      toggle: false,
      items: [
        {
          rsoid: "RsoId",
          adminid: "AdminId",
        },
        {
          rsoid: "RsoId",
          adminid: "AdminId",
        },
        {
          rsoid: "RsoId",
          adminid: "AdminId",
        },
        {
          rsoid: "RsoId",
          adminid: "AdminId",
        },
        {
          rsoid: "RsoId",
          adminid: "AdminId",
        },
      ],
    };
  },
  computed: {
    ...mapGetters("rsoModule", {
      rsos: "rsos",
      rso: "rso",
      loading: "loading",
    }),
  },
  methods: {
    ...mapActions("rsoModule", ["createRsoAction", "getRsosAction"]),
    poop() {
      const req: reqCreateRsoModel = {
        rsoid: "awefasdf",
        adminid: "asaas2121",
      };
      this.createRsoAction(req);
    },
    async getAllRsos() {
      await this.getRsosAction();
    },
  },
})
export default class ClubsPage extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>
