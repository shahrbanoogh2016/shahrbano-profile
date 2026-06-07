<script setup lang="ts">
import SkillBadge from './SkillBadge.vue'
import type { FilterTag } from '@/types'

defineProps<{
  tags: string[]
  activeTag: FilterTag
}>()

defineEmits<{
  select: [tag: FilterTag]
}>()
</script>

<template>
  <div class="filter" role="group" aria-label="Filter projects by technology">
    <SkillBadge
      label="All"
      :active="activeTag === 'all'"
      @click="$emit('select', 'all')"
    />
    <SkillBadge
      v-for="tag in tags"
      :key="tag"
      :label="tag"
      :active="activeTag === tag"
      @click="$emit('select', tag)"
    />
  </div>
</template>

<style scoped>
.filter {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
</style>
