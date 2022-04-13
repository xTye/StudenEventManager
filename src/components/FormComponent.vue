<template>
  <div class="w-full h-full">
    <!-- :validation-schema="formValidation" -->
    <VeeForm
      @submit="onSubmit"
      class="flex flex-col justify-between w-full h-full p-50 text-3xl"
    >
      <section>
        <section class="form-group mb-2">
          <label :for="field1">{{ capitalizeFirstLetter(field1) }}</label>
          <Field
            :id="field1"
            placeholder="📛"
            v-model="userForm.userid"
            autocomplete="off"
            :name="field1"
            as="input"
            type="text"
            class="text-black w-full"
          ></Field>
          <ErrorMessage :name="field1" />
        </section>

        <section class="mt-25">
          <label :for="field2">{{ capitalizeFirstLetter(field2) }}</label>
          <Field
            placeholder="📛"
            autocomplete="off"
            v-model="userForm.password"
            :name="field2"
            as="input"
            type="text"
            class="text-black w-full"
          />
          <ErrorMessage :name="field2" />
        </section>
        <section v-if="page == 'register'" class="mt-25">
          <label :for="field3">{{ capitalizeFirstLetter(field3) }}</label>
          <Field
            placeholder="📛"
            autocomplete="off"
            v-model="userForm.secret"
            :name="field3"
            as="input"
            type="text"
            class="text-black w-full"
          />
        </section>
      </section>
      <div class="text-center text-2xl text-red">
        {{ error }}
      </div>
      <section>
        <button
          data-testid="save-character"
          type="submit"
          class="w-full h-auto bg-white text-black"
        >
          {{ capitalizeFirstLetter(buttonName) }}
        </button>
      </section>
    </VeeForm>
  </div>
</template>

<script lang="ts">
import { Field, Form as VeeForm, ErrorMessage } from "vee-validate";
import { formValidation } from "../helpers/formValidation";
import { defineComponent } from "vue";
import { mapGetters } from "vuex";
export default defineComponent({
  name: "FormComponent",
  emits: ["handleSubmit"],
  components: {
    VeeForm,
    Field,
    ErrorMessage,
  },
  props: {
    field1: {
      type: String,
      required: true,
    },
    field2: {
      type: String,
      required: true,
    },
    field3: {
      type: String,
      required: false,
    },
    buttonName: {
      type: String,
      required: true,
    },
    page: {
      type: String,
      required: false,
    },
  },
  data() {
    const userForm = { userid: "", password: "", secret: "" };
    return {
      formValidation,
      userForm,
    };
  },
  computed: {
    ...mapGetters("userModule", {
      loading: "loading",
      error: "error",
    }),
  },
  methods: {
    onSubmit() {
      this.$emit("handleSubmit", this.userForm);
    },
    capitalizeFirstLetter(input: String) {
      return input.charAt(0).toUpperCase() + input.slice(1);
    },
  },
});
</script>
