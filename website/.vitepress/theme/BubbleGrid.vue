<template>
  <div class="bubble-page">
    <div class="grid">
      <div
        v-for="(bubble, i) in bubbles"
        :key="i"
        class="bubble"
        :style="{ '--delay': `${i * 0.04}s` }"
      >
        <span class="bubble-label">{{ bubble.label }}</span>
        <span class="bubble-sub">{{ bubble.sub }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const bubbles = [
  { label: 'Getting Started', sub: 'Installation & setup' },
  { label: 'Resource Packs', sub: 'Textures & models' },
  { label: 'Datapacks', sub: 'Commands & logic' },
  { label: 'Enchantments', sub: 'Custom levels' },
  { label: 'Dialogs', sub: '1.21.6+ UI system' },
  { label: 'CIT', sub: 'Custom item textures' },
  { label: 'OptiFine', sub: 'Compat & features' },
  { label: 'Modrinth', sub: 'Publishing guide' },
  { label: 'CurseForge', sub: 'Upload workflow' },
  { label: 'Planet Minecraft', sub: 'Submission tips' },
  { label: 'Shulker UI', sub: 'Pack reference' },
  { label: 'Flaming Swords', sub: 'Pack reference' },
  // add as many as you want
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
  gap: 0.3rem;
  cursor: pointer;
  transition: border-color 0.2s, transform 0.2s, box-shadow 0.2s;
  animation: pop-in 0.3s ease both;
  animation-delay: var(--delay);
}

.bubble:hover {
  border-color: var(--vp-c-brand-1);
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(0,0,0,0.15);
}

.bubble-label {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.bubble-sub {
  font-size: 0.78rem;
  color: var(--vp-c-text-2);
}

@keyframes pop-in {
  from { opacity: 0; transform: scale(0.92); }
  to   { opacity: 1; transform: scale(1); }
}
</style>