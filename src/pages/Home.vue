<template>
  <main class="flex flex-col h-full">
    <Navbar />
    <div class="flex-1 overflow-y-auto">
      <div class="flex flex-col items-center px-6 py-8 gap-8">
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
        <div class="w-full max-w-4xl flex flex-col gap-8">
          <div class="flex flex-col items-end">
            <h1 class="text-5xl font-medium py-2">Featured Posts</h1>
            <div class="flex gap-6">
              <Card title="Post 1" class="w-64">
                <p>Post description goes here.</p>
              </Card>
              <Card title="Post 2" class="w-64">
                <p>Post description goes here.</p>
              </Card>
              <Card title="Post 3" class="w-64">
                <p>Post description goes here.</p>
              </Card>
            </div>
          </div>
          <div>
            <h1 class="text-5xl font-medium py-2">What Im Working On</h1>
            <div class="flex gap-6">
              <Card title="Meridian" class="w-64">
                <p>Description of Meridian project goes here.</p>
              </Card>
              <Card title="NHL Predictive Analysis Model" class="w-64">
                <p>Description of the NHL predictive model goes here.</p>
              </Card>
              <Card title="Untitled 2D Metroidvania Game" class="w-64">
                <p>Description of the Metroidvania game goes here.</p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import Navbar from "@/components/layout/Navbar.vue";
import { Card } from "ant-design-vue";
</script>
