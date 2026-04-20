<template>
  <main class="flex flex-col h-full">
    <Navbar />
    <div class="flex-1 overflow-y-auto">
      <div class="flex flex-col px-16 py-8 gap-8">
        <div class="flex items-center gap-6 w-fit">
          <img
            src="@/assets/profilePhoto.jpg"
            class="h-60 w-60 rounded-full object-cover"
          />
          <div class="flex flex-col gap-2 max-w-sm">
            <h1 class="text-5xl font-medium">Ashton Giles</h1>
            <p class="text-black">
              Web Developer specializing in Vue and React as frontend frameworks
              and typescript using NestJS as my backend. I have a passion for
              designing games and creating software that solves real problems in
              the industry.
            </p>
          </div>
        </div>
        <div class="w-full max-w-4xl flex flex-col gap-8">
          <div class="flex flex-col items-end">
            <h1 class="text-5xl font-medium py-2">Featured Posts</h1>
            <div class="flex gap-6">
              <Card
                v-for="post in posts"
                :key="post.title"
                class="post-card w-64 cursor-pointer"
                :hoverable="true"
                @click="
                  router.push({ name: 'post', params: { slug: post.slug } })
                "
              >
                <template #title
                  ><span class="whitespace-normal">{{
                    post.title
                  }}</span></template
                >
                <p>{{ post.summary }}</p>
              </Card>
            </div>
          </div>
          <div>
            <h1 class="text-5xl font-medium py-2">What Im Working On</h1>
            <div class="flex gap-6">
              <Card
                v-for="project in projects"
                :key="project.title"
                class="flex-1 min-w-0 cursor-pointer bg-[#868194]"
                :hoverable="true"
                @click="openProject(project)"
              >
                <template #title
                  ><span class="whitespace-normal">{{
                    project.title
                  }}</span></template
                >
                <p>{{ project.summary }}</p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Modal
      v-if="selectedProject"
      :open="modalVisible"
      :title="selectedProject.title"
      :footer="null"
      @cancel="modalVisible = false"
    >
      <div class="flex flex-col gap-4 pt-2">
        <p class="text-gray-600">{{ selectedProject.description }}</p>
        <a
          v-if="selectedProject.link"
          :href="selectedProject.link"
          target="_blank"
          class="text-blue-500 hover:underline"
        >
          View Project
        </a>
        <span v-else class="text-gray-400 italic">Link coming soon</span>
      </div>
    </Modal>
  </main>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import Navbar from "@/components/layout/Navbar.vue";
import { Card, Modal } from "ant-design-vue";

const router = useRouter();

interface Post {
  title: string;
  summary: string;
  slug: string;
}

const posts: Post[] = [
  { title: "Post 1", summary: "Post description goes here.", slug: "post-1" },
  { title: "Post 2", summary: "Post description goes here.", slug: "post-2" },
  { title: "Post 3", summary: "Post description goes here.", slug: "post-3" },
];

interface Project {
  title: string;
  summary: string;
  description: string;
  link?: string;
}

const projects: Project[] = [
  {
    title: "Meridian",
    summary: "Description of Meridian project goes here.",
    description: "Description of Meridian project goes here.",
    link: undefined,
  },
  {
    title: "Recipe Organizer and Formatter",
    summary: "Description of the recipe organizer goes here.",
    description: "Description of the recipe organizer goes here.",
    link: undefined,
  },
  {
    title: "NHL Predictive Analysis Model",
    summary: "Description of the NHL predictive model goes here.",
    description: "Description of the NHL predictive model goes here.",
    link: undefined,
  },
  {
    title: "Untitled 2D Metroidvania Game",
    summary: "Description of the Metroidvania game goes here.",
    description: "Description of the Metroidvania game goes here.",
    link: undefined,
  },
];

const modalVisible = ref(false);
const selectedProject = ref<Project | null>(null);

function openProject(project: Project) {
  selectedProject.value = project;
  modalVisible.value = true;
}
</script>
