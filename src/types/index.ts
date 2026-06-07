export interface Project {
  id: number
  title: string
  description: string
  tags: string[]
  period: string
  highlights: string[]
}

export interface Skill {
  category: string
  items: string[]
}

export type FilterTag = string | 'all'
