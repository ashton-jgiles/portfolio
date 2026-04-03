<template>
  <div class="min-h-screen bg-white text-gray-900 flex flex-col">
    <Navbar />
    <RouterView class="flex-1" />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navbar from "@/components/layout/Navbar.vue";
import Footer from "@/components/layout/Footer.vue";
</script>
