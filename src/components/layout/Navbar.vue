<template>
  <div class="relative">
    <nav class="px-6 py-4 flex items-center justify-center text-gray-800">
      <div class="flex gap-6 items-center">
        <RouterLink to="/" class="font-medium text-l py-2">Home</RouterLink>
        <RouterLink to="/about" class="font-medium text-l py-2"
          >About</RouterLink
        >
        <RouterLink to="/portfolio" class="font-medium text-l py-2"
          >Portfolio</RouterLink
        >
        <RouterLink to="/blog" class="font-medium text-l py-2">Blog</RouterLink>
        <RouterLink to="/resume" class="font-medium text-l py-2"
          >Resume</RouterLink
        >
        <button class="font-medium text-l py-2" @click="handleJoinMailingList">
          Join the Mailing List
        </button>
        <a href="https://github.com/ashton-jgiles" target="_blank" class="py-2"
          ><GithubOutlined :style="{ fontSize: '32px' }"
        /></a>
        <a
          href="https://www.linkedin.com/in/ashton-giles-5a74aa2b7/"
          target="_blank"
          class="py-2"
          ><LinkedinOutlined :style="{ fontSize: '32px' }" />
        </a>
        <a
          href="https://instagram.com/ashtonjgiles"
          target="_blank"
          class="py-2"
          ><InstagramOutlined :style="{ fontSize: '32px' }"
        /></a>
        <a href="mailto:ashtonjgiles@gmail.com" target="_blank" class="py-2"
          ><MailOutlined :style="{ fontSize: '32px' }"
        /></a>
      </div>
    </nav>
  </div>

  <div>
    <MailingListModal v-model:open="modalOpen" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import MailingListModal from "../modals/MalingListModal.vue";
import {
  GithubOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  MailFilled,
  MailOutlined,
} from "@ant-design/icons-vue";

const modalOpen = ref(false);

function handleJoinMailingList() {
  modalOpen.value = true;
}
</script>
