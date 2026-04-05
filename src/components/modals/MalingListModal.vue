<template>
  <a-modal
    :open="open"
    title="Join the Mailing List"
    :confirm-loading="form.isSubmitting.value"
    @ok="handleSubmit"
    ok-text="Join"
    @cancel="handleClose"
  >
    <p class="text-gray-500 mb-4">
      Stay up to date with my latest projects and posts.
    </p>
    <a-form layout="vertical">
      <a-form-item
        label="First Name"
        :validate-status="form.errors.name ? 'error' : ''"
        :help="form.errors.name"
      >
        <a-input v-model:value="form.fields.name" placeholder="John Doe" />
      </a-form-item>
      <a-form-item
        label="Email"
        :validate-status="form.errors.email ? 'error' : ''"
        :help="form.errors.email"
      >
        <a-input
          v-model:value="form.fields.email"
          placeholder="john@example.com"
        />
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useForm } from "../../composables/useForm";

const props = defineProps<{
  open: boolean;
}>();

const emit = defineEmits<{
  "update:open": [value: boolean];
}>();

const form = useForm(
  { name: "", email: "" },
  {
    name: (val: string) => (!val ? "Name is required" : null),
    email: (val: string) => {
      if (!val) return "Email is required";
      if (!/\S+@\S+\.\S+/.test(val)) return "Invalid email address";
      return null;
    },
  },
);
const name = ref("");
const email = ref("");

async function handleSubmit() {
  if (!form.validate()) return;
  form.isSubmitting.value = true;
  try {
    // submit logic will go here
    console.log("joining", form.fields);
  } finally {
    form.isSubmitting.value = false;
  }
}

function handleClose() {
  form.reset();
  emit("update:open", false);
}
</script>
