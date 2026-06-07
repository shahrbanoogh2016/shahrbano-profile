<script setup lang="ts">
defineProps<{
  label: string
  active?: boolean
}>()

defineEmits<{
  click: []
}>()
</script>

<template>
  <button
    class="badge"
    :class="{ 'badge--active': active }"
    @click="$emit('click')"
  >
    {{ label }}
  </button>
</template>

<style scoped>
.badge {
  display: inline-block;
  padding: 0.3rem 0.75rem;
  border-radius: 999px;
  font-size: 0.78rem;
  font-weight: 500;
  border: 1px solid var(--color-border);
  background: var(--color-surface-alt);
  color: var(--color-muted);
  cursor: pointer;
  transition: all 0.15s ease;
  white-space: nowrap;
}
.badge:hover {
  border-color: var(--color-accent);
  color: var(--color-accent);
}
.badge--active {
  background: var(--color-accent);
  border-color: var(--color-accent);
  color: #fff;
}
</style>
