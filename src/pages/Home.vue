<template>
  <main>
    <Navbar />

    <!-- Hero -->
    <section class="hero">
      <div class="left-panel">
        <span class="subtitle">Software Developer</span>
        <h1 class="name">Ashton<br />Giles</h1>
        <p class="bio">
          I build full-stack web applications and small scale machine learning
          models to do statistical analysis on topics I'm interested in.
        </p>
        <div class="taglines">
          <p>
            Vue & React specialist focused on clean, scalable frontend code and
            systems.
          </p>
          <p>
            TypeScript with NestJS, and Django for robust and secure backend
            systems and APIs.
          </p>
        </div>
        <div class="scroll-hint">
          <span class="scroll-line" />
          <span>Scroll</span>
        </div>
      </div>

      <div class="right-panel">
        <div class="photo-wrapper">
          <div class="photo-accent" />
          <img src="@/assets/profilePhoto.jpg" class="photo" />
        </div>
      </div>
    </section>

    <!-- What Im Working On -->
    <section class="content-section">
      <h2 class="section-title">What Im Working On</h2>
      <div class="cards-row">
        <div
          v-for="(project, i) in projects"
          :key="project.title"
          class="card-animate"
          :style="{ transitionDelay: `${i * 0.12}s` }"
        >
          <Card
            class="project-card cursor-pointer"
            :hoverable="true"
            @click="openProject(project)"
          >
            <template #title>
              <span class="whitespace-normal">{{ project.title }}</span>
            </template>
            <p>{{ project.summary }}</p>
          </Card>
        </div>
      </div>
    </section>

    <!-- Featured Posts -->
    <section class="content-section">
      <h2 class="section-title">Featured Posts</h2>
      <div class="cards-row">
        <div
          v-for="(post, i) in posts"
          :key="post.title"
          class="card-animate"
          :style="{ transitionDelay: `${i * 0.12}s` }"
        >
          <Card
            class="post-card cursor-pointer"
            :hoverable="true"
            @click="router.push({ name: 'post', params: { slug: post.slug } })"
          >
            <template #title>
              <span class="whitespace-normal">{{ post.title }}</span>
            </template>
            <p>{{ post.summary }}</p>
          </Card>
        </div>
      </div>
    </section>

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

    <Footer />
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from "vue";
import { useRouter } from "vue-router";
import Navbar from "@/components/layout/Navbar.vue";
import Footer from "@/components/layout/Footer.vue";
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
  },
  {
    title: "Recipe Organizer and Formatter",
    summary: "Description of the recipe organizer goes here.",
    description: "Description of the recipe organizer goes here.",
  },
  {
    title: "NHL Predictive Analysis Model",
    summary: "Description of the NHL predictive model goes here.",
    description: "Description of the NHL predictive model goes here.",
  },
  {
    title: "Untitled 2D Metroidvania Game",
    summary: "Description of the Metroidvania game goes here.",
    description: "Description of the Metroidvania game goes here.",
  },
];

const modalVisible = ref(false);
const selectedProject = ref<Project | null>(null);

function openProject(project: Project) {
  selectedProject.value = project;
  modalVisible.value = true;
}

onMounted(async () => {
  await nextTick();
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        } else {
          entry.target.classList.remove("is-visible");
        }
      });
    },
    { threshold: 0 },
  );

  document
    .querySelectorAll(".card-animate")
    .forEach((el) => observer.observe(el));
});
</script>

<style scoped>
/* ── Hero layout ── */
/* To retheme: change background on .left-panel and .right-panel */
.hero {
  display: flex;
  height: calc(100vh - 72px);
  overflow: hidden;
}

.left-panel {
  background: #0d1b2a;
  width: 60%;
  flex-shrink: 0;
  clip-path: polygon(0 0, 100% 0, 87% 100%, 0 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 5rem;
  gap: 1.5rem;
  color: white;
  position: relative;
  z-index: 1;
}

.subtitle {
  font-size: 1rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: #ef946c;
}

.name {
  font-size: 5rem;
  font-weight: 500;
  line-height: 1;
}

.bio {
  font-size: 1.25rem;
  color: #9ca3af;
  max-width: 26rem;
  line-height: 1.7;
}

.taglines {
  display: flex;
  gap: 3rem;
  margin-top: 0.5rem;
}

.taglines p {
  font-size: 1rem;
  color: #6b7280;
  max-width: 160px;
  line-height: 1.6;
}

.scroll-hint {
  position: absolute;
  bottom: 2rem;
  left: 5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.75rem;
  color: #6b7280;
  letter-spacing: 0.1em;
}

.scroll-line {
  display: block;
  width: 2rem;
  height: 1px;
  background: #6b7280;
}

/* ── Right panel / photo ── */
.right-panel {
  background: #ef946c;
  flex: 1;
  margin-left: -8%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.photo-wrapper {
  position: relative;
}

.photo-accent {
  position: absolute;
  inset: 1.5rem -1.5rem -1.5rem 1.5rem;
  background: rgba(0, 0, 0, 0.2);
  z-index: 0;
}

.photo {
  position: relative;
  z-index: 1;
  height: 640px;
  width: 520px;
  object-fit: cover;
}

/* ── Content sections ── */
.content-section {
  padding: 5rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 500;
  margin-bottom: 2rem;
}

.cards-row {
  display: flex;
  gap: 1.5rem;
}

/* ── Project card colour ── */
.project-card :deep(.ant-card),
.project-card :deep(.ant-card-head),
.project-card :deep(.ant-card-body) {
  background-color: #868194;
  border: none !important;
}

/* ── Post card colour ── */
.post-card :deep(.ant-card),
.post-card :deep(.ant-card-head),
.post-card :deep(.ant-card-body) {
  background-color: #ef946c;
  border: none !important;
}

/* ── Scroll animation ── */
.card-animate {
  flex: 1;
  opacity: 0;
  transform: translateY(2rem);
  transition:
    opacity 0.5s ease,
    transform 0.5s ease;
}

/* posts row cards have fixed width */
.content-section:last-of-type .card-animate {
  flex: 0 0 16rem;
}

.card-animate.is-visible {
  opacity: 1;
  transform: translateY(0);
}
</style>
