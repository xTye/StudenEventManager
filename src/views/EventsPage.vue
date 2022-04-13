<template>
  <div class="flex flex-col bg-white w-full h-full text-black">
    <div class="text-4xl text-bold text-left w-full mt-25 ml-50">Events</div>
    <!-- List of events -->
    <div class="flex h-full w-full bg-blue1 rounded-xl px-5 pt-5 pb-100">
      <!-- Singular Event Page -->

      <div class="flex flex-col justify-start h-full w-full">
        <div class="flex flex-row justify-between h-auto w-full">
          <button
            class="bg-black text-white w-72 h-50"
            @click="
              getPublicEvents();
              toggle = 'public';
            "
          >
            Public Event
          </button>
          <button
            class="bg-black text-white w-72 h-50"
            @click="
              getPrivateEvents();
              toggle = 'private';
            "
          >
            Private Event
          </button>

          <button
            class="bg-black text-white w-72 h-50"
            @click="
              getRSOEvents();
              toggle = 'rso';
            "
          >
            RSO Event
          </button>
        </div>

        <div v-if="toggle == 'public'" class="bg-grey w-full h-full">
          <div v-for="item in publicEvents" v-bind:key="item.id">
            <div class="text-bold text-black border-b-2">
              FUCKING EVENT-> Eventid: {{ item.eventid }}
            </div>
            <div>Event Name: {{ item.EventsAt.eventName }}</div>
            <div>Event Date: {{ item.EventsAt.date }}</div>
            <div>Event description: {{ item.EventsAt.description }}</div>
            <div>Event Category: {{ item.EventsAt.Category }}</div>
            <div>Event location: {{ item.EventsAt.location }}</div>
            <div>Event phone numba: {{ item.EventsAt.phonenumber }}</div>
            <div>Event email addy: {{ item.EventsAt.emailaddress }}</div>
            <!-- <div>{{ item.adminid }}</div> -->
            <!-- <div>
              <div>{{ item.superadminid }}</div>
            </div> -->
            <div v-for="comment in item.Comments" v-bind:key="comment.id">
              BITCH ASS COMMENT:
              <div>Time:{{ comment.timestamp }}</div>
              <div>Userid: {{ comment.userid }}</div>
              <div>Text: {{ comment.text }}</div>
              <div>Rating: {{ comment.Rating }}</div>
            </div>
          </div>
        </div>

        <div v-else-if="toggle == 'private'" class="bg-grey w-full h-full">
          <div v-for="item in privateEvents" v-bind:key="item.id">
            <div class="text-bold text-black border-b-2">
              Eventid Daddy: {{ item.eventid }}
            </div>
            <div>Event Name: {{ item.EventsAt.eventName }}</div>
            <div>Event Date: {{ item.EventsAt.date }}</div>
            <div>Event description: {{ item.EventsAt.description }}</div>
            <div>Event Category: {{ item.EventsAt.Category }}</div>
            <div>Event location: {{ item.EventsAt.location }}</div>
            <div>Event phone numba: {{ item.EventsAt.phonenumber }}</div>
            <div>Event email addy: {{ item.EventsAt.emailaddress }}</div>
            <!-- <div>{{ item.adminid }}</div> -->
            <!-- <div>
              <div>{{ item.superadminid }}</div>
            </div> -->
            <div v-for="comment in item.Comments" v-bind:key="comment.id">
              <div>Time:{{ comment.timestamp }}</div>
              <div>Userid: {{ comment.userid }}</div>
              <div>Text: {{ comment.text }}</div>
              <div>Rating: {{ comment.Rating }}</div>
            </div>
          </div>
        </div>

        <div v-else-if="toggle == 'rso'" class="bg-grey w-full h-full">
          <div v-for="item in rsoEvents" v-bind:key="item.id">
            <div class="text-bold text-black border-b-2">
              Eventid Daddy: {{ item.eventid }}
            </div>
            <div>Event Name: {{ item.EventsAt.eventName }}</div>
            <div>Event Date: {{ item.EventsAt.date }}</div>
            <div>Event description: {{ item.EventsAt.description }}</div>
            <div>Event Category: {{ item.EventsAt.Category }}</div>
            <div>Event location: {{ item.EventsAt.location }}</div>
            <div>Event phone numba: {{ item.EventsAt.phonenumber }}</div>
            <div>Event email addy: {{ item.EventsAt.emailaddress }}</div>
            <!-- <div>{{ item.adminid }}</div> -->
            <!-- <div>
              <div>{{ item.superadminid }}</div>
            </div> -->
            <div v-for="comment in item.Comments" v-bind:key="comment.id">
              <div>Time:{{ comment.timestamp }}</div>
              <div>Userid: {{ comment.userid }}</div>
              <div>Text: {{ comment.text }}</div>
              <div>Rating: {{ comment.Rating }}</div>
            </div>
          </div>
        </div>
      </div>
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
      toggle: "public",
    };
  },
  computed: {
    ...mapGetters("publicEventModule", {
      publicEvents: "publicEvents",
      publicEvent: "publicEvent",
      loading: "loading",
    }),
    ...mapGetters("privateEventModule", {
      privateEvents: "privateEvents",
      privateEvent: "privateEvent",
      loading: "loading",
    }),
    ...mapGetters("rsoEventModule", {
      rsoEvents: "rsoEvents",
      rsoEvent: "rsoEvent",
      loading: "loading",
    }),
    ...mapGetters("userModule", {
      user: "user",
    }),
  },
  methods: {
    ...mapActions("publicEventModule", [
      "getPublicEventsAction",
      "getPublicEventAction",
    ]),
    ...mapActions("privateEventModule", [
      "getPrivateEventsAction",
      "getPrivateEventAction",
    ]),
    ...mapActions("rsoEventModule", [
      "getRsoEventsAction",
      "getRsoEventAction",
    ]),
    getPublicEvents() {
      this.getPublicEventsAction();
    },
    getPrivateEvents() {
      this.getPrivateEventsAction();
    },
    getRSOEvents() {
      this.getRsoEventsAction();
    },
  },
  mounted() {
    this.getPublicEvents();
  },
})
export default class EventsPage extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>
<!--  

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







-->
