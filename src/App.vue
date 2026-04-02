<template>
  <div
    class="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300"
  >
    <Navbar />
    <RouterView />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navbar from "@/components/layout/Navbar.vue";
import Footer from "@/components/layout/Footer.vue";
</script>
