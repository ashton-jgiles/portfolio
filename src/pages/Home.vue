<template>
  <main class="flex flex-col h-full">
    <Navbar />

    <div class="flex-1 overflow-y-auto">
      <div class="flex flex-col items-center px-8 py-8 gap-8">
        <div class="flex items-start gap-6">
          <div class="flex flex-col gap-2 max-w-sm">
            <h1 class="text-5xl font-medium">Ashton Giles</h1>
            <p class="text-gray-400">
              Web Developer specializing in Vue and React as frontend frameworks
              and typescript using NestJS as my backend. I have a passion for
              designing games and creating software that solves real problems in
              the industry.
            </p>
          </div>
          <img
            src="@/assets/profilePhoto.jpg"
            class="h-60 w-60 rounded-full object-cover"
          />
        </div>
        <div class="items-start">
          <h1 class="text-5xl font-medium py-2">Featured Posts</h1>
        </div>
        <div class="items-start">
          <h1 class="text-5xl font-medium py-2">What Im Working On</h1>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import Navbar from "@/components/layout/Navbar.vue";
</script>
