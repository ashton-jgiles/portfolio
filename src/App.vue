<template>
  <div class="h-screen overflow-hidden text-gray-900 flex flex-col bg-white">
    <RouterView class="flex-1" />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Footer from "@/components/layout/Footer.vue";
</script>
