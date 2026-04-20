<template>
  <main>
    <Navbar />

    <!-- Hero -->
    <section class="hero">
      <div class="left-panel">
        <span class="subtitle">Developer / Designer / Builder</span>
        <h1 class="title">About<br />Me.</h1>
        <p class="bio">
          I'm Ashton — a full-stack web developer, game designer, and hockey
          analytics enthusiast. I care deeply about clean architecture and
          shipping software that actually solves problems.
        </p>
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

    <!-- Skills -->
    <section class="content-section animate-section">
      <h2 class="section-title">Skills</h2>
      <div class="skills-grid">
        <span v-for="skill in skills" :key="skill" class="skill-tag">
          {{ skill }}
        </span>
      </div>
    </section>

    <!-- Experience -->
    <section class="content-section dark-section animate-section">
      <h2 class="section-title light">Experience</h2>
      <div class="timeline">
        <div
          v-for="job in experience"
          :key="job.company"
          class="timeline-item"
        >
          <div class="timeline-header">
            <h3 class="item-title">{{ job.title }}</h3>
            <span class="period">{{ job.period }}</span>
          </div>
          <span class="company">{{ job.company }}</span>
          <p class="item-desc">{{ job.description }}</p>
        </div>
      </div>
    </section>

    <!-- Education -->
    <section class="content-section animate-section">
      <h2 class="section-title">Education</h2>
      <div class="timeline">
        <div
          v-for="edu in education"
          :key="edu.institution"
          class="timeline-item"
        >
          <div class="timeline-header">
            <h3 class="item-title">{{ edu.degree }}</h3>
            <span class="period">{{ edu.period }}</span>
          </div>
          <span class="company">{{ edu.institution }}</span>
        </div>
      </div>
    </section>

    <!-- Interests -->
    <section class="content-section dark-section animate-section">
      <h2 class="section-title light">Interests</h2>
      <div class="interests-grid">
        <div
          v-for="interest in interests"
          :key="interest.label"
          class="interest-card"
        >
          <span class="interest-label">{{ interest.label }}</span>
          <p class="interest-desc">{{ interest.description }}</p>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import Navbar from "@/components/layout/Navbar.vue";

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
      "Building a 2D Metroidvania focused on tight movement and interconnected world design.",
  },
  {
    label: "Hockey Analytics",
    description:
      "Developing predictive models for NHL outcomes using historical data and machine learning.",
  },
  {
    label: "Cooking",
    description:
      "Experimenting in the kitchen and building tools to organize and format recipes.",
  },
];

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
    { threshold: 0.1 }
  );

  document.querySelectorAll(".animate-section").forEach((el) => observer.observe(el));
});
</script>

<style scoped>
/* ── Hero colours — change these to retheme ── */
.left-panel  { background: #0d1b2a; }
.right-panel { background: #ef946c; }

/* ── Hero layout ── */
.hero {
  display: flex;
  height: calc(100vh - 72px);
}

.left-panel {
  width: 55%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 5rem;
  gap: 1.5rem;
  color: white;
  position: relative;
}

.subtitle {
  font-size: 0.75rem;
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
  color: #9ca3af;
  max-width: 26rem;
  line-height: 1.7;
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
  width: 45%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
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
  height: 440px;
  width: 320px;
  object-fit: cover;
}

/* ── Content sections ── */
.content-section {
  padding: 5rem;
}

.dark-section {
  background: #0d1b2a;
  color: white;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 500;
  margin-bottom: 2.5rem;
  color: inherit;
}

.section-title.light {
  color: white;
}

/* ── Skills ── */
.skills-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.skill-tag {
  padding: 0.4rem 1rem;
  border: 1px solid #0d1b2a;
  font-size: 0.85rem;
  letter-spacing: 0.05em;
}

/* ── Timeline ── */
.timeline {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.timeline-item {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  border-left: 2px solid #ef946c;
  padding-left: 1.5rem;
}

.timeline-header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
}

.item-title {
  font-size: 1.1rem;
  font-weight: 500;
}

.period {
  font-size: 0.8rem;
  color: #9ca3af;
  white-space: nowrap;
}

.company {
  font-size: 0.85rem;
  color: #ef946c;
}

.item-desc {
  font-size: 0.9rem;
  color: #9ca3af;
  line-height: 1.7;
  margin-top: 0.25rem;
}

/* ── Interests ── */
.interests-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.interest-card {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.interest-label {
  font-size: 1rem;
  font-weight: 500;
  color: #ef946c;
}

.interest-desc {
  font-size: 0.85rem;
  color: #9ca3af;
  line-height: 1.7;
}

/* ── Scroll animation ── */
.animate-section {
  opacity: 0;
  transform: translateY(2rem);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.animate-section.is-visible {
  opacity: 1;
  transform: translateY(0);
}
</style>
