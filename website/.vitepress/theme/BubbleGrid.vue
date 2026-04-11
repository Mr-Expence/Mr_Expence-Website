<template>
  <div class="bubble-page">
    <div class="grid">
      
        v-for="(bubble, i) in bubbles"
        :key="i"
        class="bubble"
        :href="bubble.href"
        :style="{ '--delay': `${i * 0.04}s` }"
      >
        <img :src="bubble.logo" :alt="bubble.label" class="bubble-logo" />
        <span class="bubble-label">{{ bubble.label }}</span>
        <span class="bubble-sub">{{ bubble.sub }}</span>
    </div>
  </div>
</template>

<script setup>
const bubbles = [
  {
    label: 'Modrinth',
    sub: 'Publishing guide',
    href: '/modrinth',
    logo: '/logos/modrinth.svg',
  },
  {
    label: 'CurseForge',
    sub: 'Upload workflow',
    href: '/curseforge',
    logo: '/logos/curseforge.svg',
  },
  // ...
]
</script>

<style scoped>
.bubble-page {
  padding: 2rem;
  min-height: calc(100vh - var(--vp-nav-height));
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 1rem;
}

.bubble {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 1.25rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  transition: border-color 0.2s, transform 0.2s, box-shadow 0.2s;
  animation: pop-in 0.3s ease both;
  animation-delay: var(--delay);
}

.bubble:hover {
  border-color: var(--vp-c-brand-1);
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

.bubble-logo {
  width: 48px;
  height: 48px;
  object-fit: contain;
}

.bubble-label {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.bubble-sub {
  font-size: 0.78rem;
  color: var(--vp-c-text-2);
  text-align: center;
}

@keyframes pop-in {
  from { opacity: 0; transform: scale(0.92); }
  to   { opacity: 1; transform: scale(1); }
}
</style>