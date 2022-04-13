<template>
  <div class="flex flex-col bg-white w-full h-full p-25 text-black">
    <div class="text-5xl mt-7">Register</div>
    <div class="flex w-full h-full justify-center items-center text-white">
      <div
        class="flex flex-col items-center justify-start w-3/5 h-4/5 rounded-2xl bg-black"
      >
        <FormComponent
          field1="username"
          field2="password"
          field3="secret"
          buttonName="register"
          page="register"
          @handleSubmit="onSubmitUser($event)"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import FormComponent from "../components/FormComponent.vue";
import { mapGetters, mapActions } from "vuex";
import { UserModel } from "../models/userModel";

@Options({
  components: {
    FormComponent,
  },
  computed: {
    ...mapGetters("userModule", {
      user: "user",
      loading: "loading",
    }),
  },
  methods: {
    ...mapActions("userModule", ["registerAction"]),
    async onSubmitUser(userForm: UserModel) {
      await this.registerAction(userForm);
    },
  },
})
export default class RegisterPage extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>
