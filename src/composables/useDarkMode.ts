import { ref, watchEffect } from 'vue'

export function useDarkMode() {
  const isDark = ref<boolean>(
    window.matchMedia('(prefers-color-scheme: dark)').matches
  )

  watchEffect(() => {
    document.documentElement.setAttribute(
      'data-theme',
      isDark.value ? 'dark' : 'light'
    )
  })

  function toggle() {
    isDark.value = !isDark.value
  }

  return { isDark, toggle }
}
