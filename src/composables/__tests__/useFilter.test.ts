import { describe, it, expect } from 'vitest'
import { useFilter } from '@/composables/useFilter'
import type { Project } from '@/types'

const mockProjects: Project[] = [
  {
    id: 1,
    title: 'Project A',
    description: 'Desc A',
    tags: ['Vue 3', 'TypeScript'],
    period: '2023',
    highlights: [],
  },
  {
    id: 2,
    title: 'Project B',
    description: 'Desc B',
    tags: ['React', 'TypeScript'],
    period: '2022',
    highlights: [],
  },
  {
    id: 3,
    title: 'Project C',
    description: 'Desc C',
    tags: ['Vue 3', 'GraphQL'],
    period: '2021',
    highlights: [],
  },
]

describe('useFilter', () => {
  it('returns all projects when tag is "all"', () => {
    const { filtered } = useFilter(mockProjects)
    expect(filtered.value).toHaveLength(3)
  })

  it('filters correctly by a single tag', () => {
    const { filtered, setTag } = useFilter(mockProjects)
    setTag('Vue 3')
    expect(filtered.value).toHaveLength(2)
    expect(filtered.value.every((p) => p.tags.includes('Vue 3'))).toBe(true)
  })

  it('returns empty array when no project matches tag', () => {
    const { filtered, setTag } = useFilter(mockProjects)
    setTag('Node.js')
    expect(filtered.value).toHaveLength(0)
  })

  it('computes all unique tags', () => {
    const { allTags } = useFilter(mockProjects)
    expect(allTags.value).toContain('Vue 3')
    expect(allTags.value).toContain('React')
    expect(allTags.value).toContain('TypeScript')
    expect(allTags.value).toContain('GraphQL')
    // No duplicates
    expect(allTags.value.length).toBe(new Set(allTags.value).size)
  })

  it('resets to all projects when tag is set back to "all"', () => {
    const { filtered, setTag } = useFilter(mockProjects)
    setTag('React')
    expect(filtered.value).toHaveLength(1)
    setTag('all')
    expect(filtered.value).toHaveLength(3)
  })
})
