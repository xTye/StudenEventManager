<template>
  <div class="flex flex-col bg-white w-full h-full text-black">
    <div class="text-4xl text-bold text-center">Student Event Manager</div>
    <!-- List of events -->
    <div class="flex bg-blue1 rounded-xl px-5 pt-5 pb-100">
      <!-- Singular Event Page -->
      <div class="flex flex-col bg-white rounded-lg p-5">
        <div class="text-bold text-black border-b-2">EVENT NAME 1</div>
        <div class="rounded-lg bg-blue1 w-5/12 text-bold pb-1 text-white">
          Sports
        </div>
        <div>This is a description for the event.</div>
        <div>
          <div>01/01/2022</div>
          <div>12:00PM</div>
        </div>
        <div>Location: Student Union</div>
        <div>Phone: 123-456-7899</div>
        <div>Email: lisa@ucf.edu</div>
      </div>
      <ul class="w-full">
        <li>
          <button
            class="bg-black text-white w-full h-50"
            @click="getPublicEvents"
          >
            Testing
          </button>
        </li>
        <li
          v-for="event in publicEvents"
          v-bind:key="event.id"
          class="text-black text-9xl spinne"
        >
          {{ event.eventid }} + {{ event.adminid }} + {{ event.superadminid }}
          <div
            v-if="loading"
            class="w-40 h-40 border-t-4 border-b-4 border-green-900 animate-spin"
          ></div>
        </li>
        <!--<li class="text-black" v-for="event in events" v-bind:key="event.id">
          {{ event.eventid }} +
        </li>-->
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { mapGetters, mapActions } from "vuex";
//import { reqFindOnePublicEventModel } from "../models/publicEventModel";
//import { reqFindAllPublicEventModel } from "../models/publicEventModel";

@Options({
  data() {
    return {
      items: [{ message: "Foo" }, { message: "Ba" }],
    };
  },
  computed: {
    ...mapGetters("publicEventModule", {
      publicEvents: "publicEvents",
      publicEvent: "publicEvent",
      loading: "loading",
    }),
  },
  methods: {
    ...mapActions("publicEventModule", [
      "getPublicEventsAction",
      "getPublicEventAction",
    ]),
    async getPublicEvents() {
      await this.getPublicEventsAction();
    },
  },
})
export default class EventsPage extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>
