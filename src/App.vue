<template>
  <div class="min-h-screen flex flex-col text-black bg-white">
    <RouterView />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Footer from "@/components/layout/Footer.vue";
</script>
