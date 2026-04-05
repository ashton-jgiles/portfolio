<template>
  <Navbar />
  <section class="flex flex-col items-center py-8 gap-4 overflow-auto">
    <div class="flex items-center justify-between w-full max-w-4xl px-4">
      <h1 class="text-4xl font-medium">Resume</h1>
      <a
        :href="resumeUrl"
        download="Ashton Giles Resume.pdf"
        class="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium transition-colors"
      >
        <DownloadOutlined />
        Download PDF
      </a>
    </div>
    <div style="width: 100%; max-width: 900px; height: 800px">
      <VPdfViewer :src="resumeUrl" />
    </div>
  </section>
</template>

<script setup lang="ts">
import Navbar from "@/components/layout/Navbar.vue";
import { VPdfViewer } from "@vue-pdf-viewer/viewer";
import { DownloadOutlined } from "@ant-design/icons-vue";
import resumePdf from "@/assets/Ashton Giles_Resume 2024.pdf";

const resumeUrl = resumePdf;
</script>
