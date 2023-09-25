<template>
  <div class="toggle-container">
    <div v-if="theme" @click="toggleLightMode" class="theme-btn">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-sun-medium"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 3v1" />
        <path d="M12 20v1" />
        <path d="M3 12h1" />
        <path d="M20 12h1" />
        <path d="m18.364 5.636-.707.707" />
        <path d="m6.343 17.657-.707.707" />
        <path d="m5.636 5.636.707.707" />
        <path d="m17.657 17.657.707.707" />
      </svg>
      <span>Light</span>
    </div>
    <div v-if="!theme" @click="toggleLightMode" class="theme-btn">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-moon"
      >
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
      </svg>
      <span>Dark</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ToggleTheme',
  emits: ['toggleLightMode'],
  props: ['theme'],
  methods: {
    toggleLightMode(e) {
      this.$emit('toggleLightMode', e);
    },
  },
};
</script>

<style scoped>
.toggle-container {
  display: flex;
  justify-content: left;
  align-items: center;
  padding: 10px 10px 0 0;
  cursor: pointer;
}

.theme-btn:hover {
  background-color: var(--color-highlight);
  color: var(--color-text-strong);
}
.theme-btn span {
  margin-left: 0.5rem;
}

.theme-btn span::selection {
  background-color: transparent;
}

.theme-btn {
  display: flex;
  justify-content: center;
  padding: 0.5rem 1rem;
  align-items: center;
  border-radius: 7px;
}
</style>
