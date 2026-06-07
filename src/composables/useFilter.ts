import { ref, computed } from 'vue'
import type { Project, FilterTag } from '@/types'

export function useFilter(projects: Project[]) {
  const activeTag = ref<FilterTag>('all')

  const allTags = computed<string[]>(() => {
    const tags = projects.flatMap((p) => p.tags)
    return [...new Set(tags)]
  })

  const filtered = computed<Project[]>(() => {
    if (activeTag.value === 'all') return projects
    return projects.filter((p) => p.tags.includes(activeTag.value as string))
  })

  function setTag(tag: FilterTag) {
    activeTag.value = tag
  }

  return { activeTag, allTags, filtered, setTag }
}
