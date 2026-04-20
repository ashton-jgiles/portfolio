<template>
  <main class="h-screen overflow-hidden">
    <Navbar />

    <!-- Hero -->
    <section class="hero">
      <div class="left-panel">
        <span class="subtitle">Career Overview</span>
        <h1 class="title">Resume</h1>
        <p class="bio">
          A snapshot of my experience, skills, and the problems I've enjoyed
          solving. Download the PDF or preview it below.
        </p>
        <a
          :href="resumeUrl"
          download="Ashton Giles Resume.pdf"
          class="download-btn"
        >
          <DownloadOutlined />
          Download PDF
        </a>
      </div>

      <div class="right-panel">
        <div class="stats">
          <div class="stat">
            <span class="stat-number">3+</span>
            <span class="stat-label">Years Experience</span>
          </div>
          <div class="stat-divider" />
          <div class="stat">
            <span class="stat-number">10+</span>
            <span class="stat-label">Projects Shipped</span>
          </div>
          <div class="stat-divider" />
          <div class="stat">
            <span class="stat-number">5</span>
            <span class="stat-label">Tech Specializations</span>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import Navbar from "@/components/layout/Navbar.vue";
import { DownloadOutlined } from "@ant-design/icons-vue";
import resumePdf from "@/assets/Resume 2026 Ashton Giles.pdf";

const resumeUrl = resumePdf;

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.05 },
  );

  document
    .querySelectorAll(".animate-section")
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

.title {
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

.download-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: #ef946c;
  color: #0d1b2a;
  font-weight: 500;
  font-size: 1.25rem;
  text-decoration: none;
  width: fit-content;
  transition: opacity 0.2s ease;
}

.download-btn:hover {
  opacity: 0.85;
}

/* ── Right panel / stats ── */
.right-panel {
  background: #ef946c;
  flex: 1;
  margin-left: -8%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.stats {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
}

.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
}

.stat-number {
  font-size: 4rem;
  font-weight: 500;
  color: #0d1b2a;
  line-height: 1;
}

.stat-label {
  font-size: 0.8rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(13, 27, 42, 0.6);
}

.stat-divider {
  width: 2rem;
  height: 1px;
  background: rgba(13, 27, 42, 0.25);
}
</style>
