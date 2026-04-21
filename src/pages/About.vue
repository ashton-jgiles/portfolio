<template>
  <main class="h-screen overflow-hidden">
    <Navbar />

    <section class="hero">
      <div class="left-panel">
        <span class="subtitle">Developer / Designer / Builder</span>
        <h1 class="title">About<br />Me.</h1>
        <p class="bio">
          I'm Ashton — a full-stack web developer, game designer, and data
          science / machine learning enthusiast. I think a cornerstone of
          software development is shipping clean, readable, and traceable code.
          I believe in clean system architecture and creating systems that solve
          real problems.
        </p>
      </div>

      <div class="right-panel">
        <div class="right-content">
          <!-- Skills -->
          <div class="panel-section">
            <h2 class="panel-title">Skills</h2>
            <div class="skills-grid">
              <span v-for="skill in skills" :key="skill" class="skill-tag">
                {{ skill }}
              </span>
            </div>
          </div>

          <!-- Education -->
          <div class="panel-section">
            <h2 class="panel-title">Education</h2>
            <div
              v-for="edu in education"
              :key="edu.institution"
              class="edu-item"
            >
              <div class="edu-header">
                <span class="edu-degree">{{ edu.degree }}</span>
                <span class="edu-period">{{ edu.period }}</span>
              </div>
              <span class="edu-institution">{{ edu.institution }}</span>
            </div>
          </div>

          <!-- Interests -->
          <div class="panel-section">
            <h2 class="panel-title">Interests</h2>
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
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import Navbar from "@/components/layout/Navbar.vue";

const skills = [
  "Vue 3",
  "React",
  "TypeScript",
  "NestJS",
  "Node.js",
  "Django",
  "MySQL",
  "PostgreSQL",
  "Tailwind CSS",
  "REST APIs",
  "Pyhton",
  "Unity",
  "C++",
  "Git",
  "Docker",
];

const education = [
  {
    degree:
      "Bachelor of Science (B.Sc) Major in Computer Science, Concentration of Computer Game Development, Minor in Data Science",
    institution: "University of Calgary",
    period: "September 2023 – April 2027",
  },
];

const interests = [
  {
    label: "Backcountry Camping",
    description:
      "I enjoy packing up all my gear and hiking into remote places to camp with my friends and experience nature in a way few ever do. Going out into remote areas of the Canadian Rockies brings me so much peace and happiness and is a great escape from busy city life.",
  },
  {
    label: "Hockey",
    description:
      "I have played ice hockey since I was very young and continue to do so to this day. It's something that I'm very passionate about and enjoy doing to get active in our increasing digital and online world.",
  },
  {
    label: "Cooking & Baking",
    description:
      "I have always enjoyed cooking and baking with my family and for myself. I think cooking your own meals and making your own food where you can is very important to not only living a healthy life but a fulfilling one as well.",
  },
];
</script>

<style scoped>
.hero {
  display: flex;
  height: calc(100vh - 72px);
  overflow: hidden;
}

.left-panel {
  background: #0d1b2a;
  width: 50%;
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
  font-size: 0.95rem;
}

/* ── Right panel ── */
.right-panel {
  background: #ef946c;
  flex: 1;
  margin-left: -8%;
  overflow-y: auto;
  display: flex;
  align-items: stretch;
}

.right-content {
  padding: 5rem 3rem 5rem 17%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
}

.panel-section {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.panel-title {
  font-size: 1.75rem;
  font-weight: 500;
  color: #0d1b2a;
  margin-bottom: 0.15rem;
}

/* ── Skills ── */
.skills-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-tag {
  padding: 0.3rem 0.85rem;
  border: 1px solid rgba(13, 27, 42, 0.4);
  font-size: 0.8rem;
  letter-spacing: 0.05em;
  color: #0d1b2a;
}

/* ── Education ── */
.edu-item {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  border-left: 2px solid #0d1b2a;
  padding-left: 1rem;
}

.edu-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 1rem;
}

.edu-degree {
  font-size: 0.85rem;
  color: #0d1b2a;
  line-height: 1.5;
}

.edu-period {
  font-size: 0.75rem;
  color: rgba(13, 27, 42, 0.6);
  white-space: nowrap;
}

.edu-institution {
  font-size: 0.8rem;
  color: rgba(13, 27, 42, 0.7);
}

/* ── Interests ── */
.interests-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.interest-card {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
  border: 1px solid rgba(13, 27, 42, 0.25);
}

.interest-label {
  font-size: 0.85rem;
  font-weight: 500;
  color: #0d1b2a;
}

.interest-desc {
  font-size: 0.8rem;
  color: rgba(13, 27, 42, 0.7);
  line-height: 1.6;
}
</style>
