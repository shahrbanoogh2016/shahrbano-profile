<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'
import ProjectCard from '@/components/ProjectCard.vue'
import FilterBar from '@/components/FilterBar.vue'
import SkillBadge from '@/components/SkillBadge.vue'
import { useFilter } from '@/composables/useFilter'
import type { Project, Skill } from '@/types'

const projects: Project[] = [
  {
    id: 1,
    title: 'Mercedes-Benz – Customer Frontend Platform',
    description:
      'Large-scale, customer-facing web application for an international automotive brand with 50,000+ active users.',
    tags: ['Vue 3', 'TypeScript', 'GraphQL', 'CI/CD', 'AWS'],
    period: '2022 – 2025',
    highlights: [
      'Built modular design system & reusable component library (WCAG compliant)',
      'Reduced deployment time by ~60% via Jenkins & GitLab CI pipelines',
      'Led API integration with GraphQL and Python backend services',
    ],
  },
  {
    id: 2,
    title: 'EOS – Onboarding & Dashboard',
    description:
      'Complete onboarding flow and interactive analytics dashboards for a SaaS platform.',
    tags: ['React', 'TypeScript', 'GraphQL', 'Cypress'],
    period: '2022',
    highlights: [
      'Increased test coverage to 85% with Cypress E2E and Jest unit tests',
      'Built multi-step onboarding wizard with dynamic form validation',
    ],
  },
  {
    id: 3,
    title: 'UKT – QR Code Authentication',
    description:
      'Secure onboarding process with QR code login and OpenID Connect integration.',
    tags: ['Vue 3', 'Vuex', 'OIDC'],
    period: '2022',
    highlights: [
      'Integrated OIDC for secure, standards-based authentication',
      'Designed full UI flow in Figma before implementation',
    ],
  },
  {
    id: 4,
    title: 'paul-solutions.de – Document Workflow App',
    description:
      'Enterprise document management system with role-based access, multi-tenancy, and real-time chat.',
    tags: ['React', 'Redux', 'TypeScript'],
    period: '2021 – 2022',
    highlights: [
      'Implemented role & permission management with multi-tenant support',
      'Built automated PDF generation, flowcharts, and file upload features',
      'Added push and email notification system',
    ],
  },
  {
    id: 5,
    title: 'evara.life – Real Estate Platform',
    description:
      'Multilingual real estate marketplace (Buy / Sell / Rent) with PWA support and automated workflows.',
    tags: ['Vue 3', 'TypeScript', 'Node.js', 'PostgreSQL'],
    period: '2019',
    highlights: [
      'Progressive Web App with offline capabilities',
      'Built-in currency converter and multilingual i18n support',
      'Full-stack: Vue.js frontend + Node.js/PostgreSQL backend',
    ],
  },
]

const skills: Skill[] = [
  { category: 'Frontend', items: ['Vue 3', 'React', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'SCSS', 'Tailwind CSS'] },
  { category: 'State Management', items: ['Pinia', 'Vuex', 'Redux', 'Redux Saga'] },
  { category: 'Backend & API', items: ['Node.js', 'Python', 'GraphQL', 'REST API', 'PostgreSQL'] },
  { category: 'DevOps & Cloud', items: ['Docker', 'Jenkins', 'GitLab CI', 'AWS', 'Azure'] },
  { category: 'Testing', items: ['Cypress', 'Jest', 'Vitest', 'Vue Test Utils'] },
]

const { activeTag, allTags, filtered, setTag } = useFilter(projects)
</script>

<template>
  <div class="app">
    <AppHeader />

    <main class="main">
      <!-- Hero -->
      <section class="hero">
        <h1 class="hero__headline">
          Senior Full-Stack Developer<br />
          <span class="hero__accent">Vue 3 · TypeScript · React</span>
        </h1>
        <p class="hero__sub">
          10+ years building scalable frontends and full-stack applications.
          From automotive enterprise to real-estate platforms.
          Based in Dortmund, Germany — open to remote.
        </p>
        <div class="hero__links">
          <a href="mailto:Shahrbanoo.gh.2016@gmail.com" class="btn btn--primary">Contact me</a>
          <a href="https://www.linkedin.com/in/shahrbano-ghanavati" target="_blank" rel="noopener" class="btn btn--outline">LinkedIn</a>
        </div>
      </section>

      <!-- Skills -->
      <section class="section">
        <h2 class="section__title">Technical Skills</h2>
        <div class="skills">
          <div v-for="skill in skills" :key="skill.category" class="skills__group">
            <p class="skills__category">{{ skill.category }}</p>
            <div class="skills__items">
              <SkillBadge v-for="item in skill.items" :key="item" :label="item" />
            </div>
          </div>
        </div>
      </section>

      <!-- Projects -->
      <section class="section">
        <h2 class="section__title">Selected Projects</h2>
        <FilterBar
          :tags="allTags"
          :active-tag="activeTag"
          @select="setTag"
        />
        <TransitionGroup name="list" tag="div" class="projects">
          <ProjectCard
            v-for="project in filtered"
            :key="project.id"
            :project="project"
          />
        </TransitionGroup>
        <p v-if="filtered.length === 0" class="empty">No projects match this filter.</p>
      </section>
    </main>

    <footer class="footer">
      <p>© 2026 Shahrbano Tajik · Built with Vue 3 + TypeScript</p>
    </footer>
  </div>
</template>

<style>
/* CSS custom properties for theming */
:root {
  --color-bg: #f9fafb;
  --color-surface: #ffffff;
  --color-surface-alt: #f3f4f6;
  --color-border: #e5e7eb;
  --color-text: #111827;
  --color-muted: #6b7280;
  --color-accent: #2563eb;
}
[data-theme='dark'] {
  --color-bg: #0f172a;
  --color-surface: #1e293b;
  --color-surface-alt: #273549;
  --color-border: #334155;
  --color-text: #f1f5f9;
  --color-muted: #94a3b8;
  --color-accent: #60a5fa;
}

*, *::before, *::after { box-sizing: border-box; }

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: var(--color-bg);
  color: var(--color-text);
  transition: background 0.2s, color 0.2s;
}
</style>

<style scoped>
.app { min-height: 100vh; display: flex; flex-direction: column; }

.main {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
}

/* Hero */
.hero { display: flex; flex-direction: column; gap: 1rem; padding-top: 1rem; }
.hero__headline {
  font-size: clamp(1.6rem, 4vw, 2.2rem);
  font-weight: 800;
  line-height: 1.2;
  margin: 0;
  color: var(--color-text);
}
.hero__accent { color: var(--color-accent); }
.hero__sub {
  font-size: 1rem;
  color: var(--color-muted);
  line-height: 1.6;
  max-width: 600px;
  margin: 0;
}
.hero__links { display: flex; gap: 0.75rem; flex-wrap: wrap; }

/* Buttons */
.btn {
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.15s;
  cursor: pointer;
  border: 1px solid transparent;
}
.btn--primary { background: var(--color-accent); color: #fff; }
.btn--primary:hover { opacity: 0.88; }
.btn--outline { border-color: var(--color-border); color: var(--color-text); background: transparent; }
.btn--outline:hover { border-color: var(--color-accent); color: var(--color-accent); }

/* Section */
.section { display: flex; flex-direction: column; gap: 1.25rem; }
.section__title {
  font-size: 1.2rem;
  font-weight: 700;
  margin: 0;
  color: var(--color-text);
  border-left: 3px solid var(--color-accent);
  padding-left: 0.75rem;
}

/* Skills */
.skills { display: flex; flex-direction: column; gap: 1rem; }
.skills__group { display: flex; flex-direction: column; gap: 0.5rem; }
.skills__category { font-size: 0.8rem; font-weight: 700; color: var(--color-muted); text-transform: uppercase; letter-spacing: 0.05em; margin: 0; }
.skills__items { display: flex; flex-wrap: wrap; gap: 0.4rem; }

/* Projects grid */
.projects {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  gap: 1rem;
}
.empty { color: var(--color-muted); font-size: 0.9rem; }

/* List transition */
.list-enter-active, .list-leave-active { transition: all 0.25s ease; }
.list-enter-from, .list-leave-to { opacity: 0; transform: translateY(8px); }

/* Footer */
.footer {
  text-align: center;
  padding: 1.5rem;
  font-size: 0.8rem;
  color: var(--color-muted);
  border-top: 1px solid var(--color-border);
}
</style>
