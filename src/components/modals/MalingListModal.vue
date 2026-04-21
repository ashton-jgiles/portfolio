<template>
  <a-modal
    :open="open"
    :footer="null"
    :closable="true"
    @cancel="handleClose"
    class="mailing-modal"
  >
    <div class="modal-body">
      <span class="modal-subtitle">Stay In The Loop</span>
      <h2 class="modal-title">Join the<br />Mailing List</h2>
      <p class="modal-desc">
        Stay up to date with my latest projects and posts.
      </p>

      <a-form layout="vertical" class="modal-form">
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

      <button class="join-btn" :disabled="form.isSubmitting.value" @click="handleSubmit">
        {{ form.isSubmitting.value ? "Joining..." : "Join" }}
      </button>
    </div>
  </a-modal>
</template>

<script setup lang="ts">
import { useForm } from "../../composables/useForm";

defineProps<{
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

async function handleSubmit() {
  if (!form.validate()) return;
  form.isSubmitting.value = true;
  try {
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

<style scoped>
.modal-body {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem 0.5rem 0.5rem;
}

.modal-subtitle {
  font-size: 0.75rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: #ef946c;
}

.modal-title {
  font-size: 2.5rem;
  font-weight: 500;
  line-height: 1.1;
  color: #0d1b2a;
}

.modal-desc {
  font-size: 0.9rem;
  color: #9ca3af;
  line-height: 1.6;
  margin-bottom: 0.5rem;
}

.modal-form :deep(.ant-form-item-label label) {
  font-size: 0.8rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #0d1b2a;
}

.modal-form :deep(.ant-input) {
  border: none;
  border-bottom: 1px solid #0d1b2a;
  border-radius: 0;
  box-shadow: none;
  padding-left: 0;
  font-family: inherit;
}

.modal-form :deep(.ant-input:focus) {
  border-bottom-color: #ef946c;
  box-shadow: none;
}

.join-btn {
  margin-top: 0.5rem;
  padding: 0.75rem 2rem;
  background: #0d1b2a;
  color: white;
  font-size: 0.9rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  width: fit-content;
  font-family: inherit;
  transition: background 0.2s ease;
}

.join-btn:hover {
  background: #ef946c;
}

.join-btn:disabled {
  opacity: 0.6;
  cursor: default;
}
</style>
