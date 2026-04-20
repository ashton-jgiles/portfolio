<template>
  <main class="flex flex-col h-full">
    <Navbar />
    <div class="flex-1 overflow-y-auto">
      <div class="flex flex-col items-center px-6 py-8 gap-12">
        <div class="w-full max-w-4xl flex flex-col gap-12">

          <!-- Intro -->
          <div class="flex items-start gap-8">
            <img
              src="@/assets/profilePhoto.jpg"
              class="h-48 w-48 rounded-full object-cover shrink-0"
            />
            <div class="flex flex-col gap-3">
              <h1 class="text-5xl font-medium">About Me</h1>
              <p class="text-gray-400 leading-relaxed">
                I'm Ashton, a web developer based in [City, Province]. I specialize in building
                full-stack applications with Vue and React on the frontend and NestJS with TypeScript
                on the backend. I care deeply about clean architecture, developer experience, and
                shipping software that actually solves problems.
              </p>
              <p class="text-gray-400 leading-relaxed">
                Outside of work I'm passionate about game design — I'm currently building an
                untitled 2D Metroidvania and tinkering with game systems whenever I get the chance.
              </p>
            </div>
          </div>

          <!-- Skills -->
          <div class="flex flex-col gap-4">
            <h2 class="text-3xl font-medium">Skills</h2>
            <div class="flex flex-wrap gap-3">
              <Tag v-for="skill in skills" :key="skill" color="default" class="text-sm px-3 py-1">
                {{ skill }}
              </Tag>
            </div>
          </div>

          <!-- Experience -->
          <div class="flex flex-col gap-6">
            <h2 class="text-3xl font-medium">Experience</h2>
            <div class="flex flex-col gap-6">
              <div
                v-for="job in experience"
                :key="job.company"
                class="flex flex-col gap-1 border-l-2 border-gray-200 pl-4"
              >
                <div class="flex items-baseline justify-between">
                  <h3 class="text-lg font-medium">{{ job.title }}</h3>
                  <span class="text-sm text-gray-400">{{ job.period }}</span>
                </div>
                <span class="text-gray-500 text-sm">{{ job.company }}</span>
                <p class="text-gray-400 mt-1 leading-relaxed">{{ job.description }}</p>
              </div>
            </div>
          </div>

          <!-- Education -->
          <div class="flex flex-col gap-6">
            <h2 class="text-3xl font-medium">Education</h2>
            <div class="flex flex-col gap-6">
              <div
                v-for="edu in education"
                :key="edu.institution"
                class="flex flex-col gap-1 border-l-2 border-gray-200 pl-4"
              >
                <div class="flex items-baseline justify-between">
                  <h3 class="text-lg font-medium">{{ edu.degree }}</h3>
                  <span class="text-sm text-gray-400">{{ edu.period }}</span>
                </div>
                <span class="text-gray-500 text-sm">{{ edu.institution }}</span>
              </div>
            </div>
          </div>

          <!-- Interests -->
          <div class="flex flex-col gap-4">
            <h2 class="text-3xl font-medium">Interests</h2>
            <div class="flex flex-col gap-3">
              <div v-for="interest in interests" :key="interest.label" class="flex items-start gap-3">
                <span class="text-gray-300 mt-0.5">•</span>
                <div>
                  <span class="font-medium">{{ interest.label }}</span>
                  <span class="text-gray-400"> — {{ interest.description }}</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import Navbar from "@/components/layout/Navbar.vue";
import { Tag } from "ant-design-vue";

const skills = [
  "Vue 3",
  "React",
  "TypeScript",
  "NestJS",
  "Node.js",
  "PostgreSQL",
  "Tailwind CSS",
  "REST APIs",
  "Git",
  "Docker",
];

const experience = [
  {
    title: "Job Title",
    company: "Company Name",
    period: "Month Year – Present",
    description:
      "Brief description of your responsibilities and impact. Replace this with your actual experience.",
  },
  {
    title: "Job Title",
    company: "Company Name",
    period: "Month Year – Month Year",
    description:
      "Brief description of your responsibilities and impact. Replace this with your actual experience.",
  },
];

const education = [
  {
    degree: "Degree Name",
    institution: "Institution Name",
    period: "Year – Year",
  },
];

const interests = [
  {
    label: "Game Design",
    description:
      "Building games from the ground up — currently working on a 2D Metroidvania with a focus on tight movement and interconnected world design.",
  },
  {
    label: "Hockey Analytics",
    description:
      "Developing predictive models for NHL outcomes using historical data and machine learning.",
  },
  {
    label: "Cooking",
    description: "Experimenting in the kitchen and building tools to organize and format recipes.",
  },
];
</script>
