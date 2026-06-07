<script setup lang="ts">
import SkillBadge from './SkillBadge.vue'
import type { Project } from '@/types'

defineProps<{
  project: Project
}>()
</script>

<template>
  <article class="card">
    <div class="card__header">
      <h3 class="card__title">{{ project.title }}</h3>
      <span class="card__period">{{ project.period }}</span>
    </div>
    <p class="card__description">{{ project.description }}</p>
    <ul class="card__highlights">
      <li v-for="h in project.highlights" :key="h">{{ h }}</li>
    </ul>
    <div class="card__tags">
      <SkillBadge v-for="tag in project.tags" :key="tag" :label="tag" />
    </div>
  </article>
</template>

<style scoped>
.card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  padding: 1.25rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  transition: box-shadow 0.2s, transform 0.2s;
}
.card:hover {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transform: translateY(-2px);
}
.card__header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0.5rem;
  flex-wrap: wrap;
}
.card__title {
  font-size: 1rem;
  font-weight: 700;
  color: var(--color-text);
  margin: 0;
}
.card__period {
  font-size: 0.75rem;
  color: var(--color-muted);
  white-space: nowrap;
}
.card__description {
  font-size: 0.875rem;
  color: var(--color-muted);
  margin: 0;
  line-height: 1.5;
}
.card__highlights {
  margin: 0;
  padding-left: 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}
.card__highlights li {
  font-size: 0.85rem;
  color: var(--color-text);
  line-height: 1.5;
}
.card__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: 0.25rem;
}
</style>
