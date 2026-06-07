<script setup lang="ts">
import { useDarkMode } from '@/composables/useDarkMode'

const { isDark, toggle } = useDarkMode()
</script>

<template>
  <header class="header">
    <div class="header__inner">
      <div class="header__brand">
        <span class="header__initials">ST</span>
        <div>
          <p class="header__name">Shahrbano Tajik</p>
          <p class="header__role">Senior Frontend / Full-Stack Developer</p>
        </div>
      </div>
      <button class="header__toggle" @click="toggle" :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'">
        {{ isDark ? '☀️' : '🌙' }}
      </button>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: var(--color-surface);
  border-bottom: 1px solid var(--color-border);
  backdrop-filter: blur(8px);
}
.header__inner {
  max-width: 900px;
  margin: 0 auto;
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header__brand {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
.header__initials {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--color-accent);
  color: #fff;
  font-weight: 700;
  font-size: 0.9rem;
  display: grid;
  place-items: center;
  flex-shrink: 0;
}
.header__name {
  font-weight: 700;
  font-size: 1rem;
  margin: 0;
  color: var(--color-text);
}
.header__role {
  font-size: 0.75rem;
  color: var(--color-muted);
  margin: 0;
}
.header__toggle {
  background: none;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  padding: 0.4rem 0.7rem;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.2s;
}
.header__toggle:hover {
  background: var(--color-border);
}
</style>
