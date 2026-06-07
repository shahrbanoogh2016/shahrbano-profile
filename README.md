# Shahrbano Tajik – Vue 3 Portfolio

A clean, production-structured **Vue 3 + TypeScript** portfolio showcasing my frontend development approach.

🔗 **[shahrbano-profile](https://github.com/shahrbanoogh2016/shahrbano-profile)**

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Vue 3 (Composition API) |
| Language | TypeScript (strict mode) |
| Build tool | Vite |
| Testing | Vitest + Vue Test Utils |
| Styling | Scoped CSS + CSS custom properties |

---

## Project Structure

```
src/
├── components/
│   ├── AppHeader.vue       # Sticky header with dark mode toggle
│   ├── FilterBar.vue       # Tag-based project filter
│   ├── ProjectCard.vue     # Project display card
│   └── SkillBadge.vue      # Reusable badge component
├── composables/
│   ├── useFilter.ts        # Reactive filter logic (testable)
│   ├── useDarkMode.ts      # System-aware dark mode
│   └── __tests__/
│       └── useFilter.test.ts
├── types/
│   └── index.ts            # Shared TypeScript interfaces
├── App.vue
└── main.ts
```

---

## Key Patterns

- **Composition API** with `<script setup>` throughout
- **Typed props & emits** using TypeScript generics
- **Composables** for reusable, testable logic
- **CSS custom properties** for theming (light/dark mode)
- **TransitionGroup** for animated list updates
- **WCAG-aware** markup (roles, aria-labels)

---

## Getting Started

```bash
npm install
npm run dev       # Development server
npm run build     # Production build
npm test          # Run unit tests
```

---

## About

Senior Full-Stack Developer with 10+ years of experience.
Specialized in Vue.js (Vue 3), React, TypeScript, and scalable frontend architectures.

📧 Shahrbanoo.gh.2016@gmail.com  
🔗 [linkedin.com/in/shahrbano-ghanavati](https://linkedin.com/in/shahrbano-ghanavati)  
🌐 [digi2world.de](https://www.digi2world.de)
