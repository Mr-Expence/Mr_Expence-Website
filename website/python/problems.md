---
title: Problem Picker
search: false
---

<script setup>
const RATINGS = [800,900,1000,1100,1200,1300,1400,1500,1600,1700,1800,1900,2000,2100,2200,2300,2400,2500,2600,2700,2800,2900,3000,3100,3200,3300,3400,3500]
async function roll(min, max) {
  const btn = document.getElementById('roll-btn')
  btn.textContent = 'Loading…'
  btn.disabled = true
  try {
    const res = await fetch('https://codeforces.com/api/problemset.problems')
    const json = await res.json()
    const pool = json.result.problems.filter(p => p.rating >= min && p.rating <= max)
    const p = pool[Math.floor(Math.random() * pool.length)]
    window.open(`https://codeforces.com/problemset/problem/${p.contestId}/${p.index}`, '_blank')
  } catch {
    alert('Could not reach Codeforces. Check your connection.')
  } finally {
    btn.textContent = '🎲 Random Problem'
    btn.disabled = false
  }
}
</script>

<center>

# Problem Picker

[Codeforces](https://codeforces.com/problemset) is a great place to find coding problems. They can be simple and easy or complex and difficult. The difficulties go from 800 to 3500

Get a random problem from [Codeforces](https://codeforces.com/problemset).

</center>

<div style="display:flex;gap:10px;align-items:flex-end;flex-wrap:wrap;margin:1.5rem 0;justify-content:center">
  <div>
    <label style="display:block;font-size:12px;color:var(--vp-c-text-2);margin-bottom:4px">Min</label>
    <select id="min-rating" style="height:36px;padding:0 8px;border-radius:8px;border:1px solid var(--vp-c-divider);background:var(--vp-c-bg-soft);color:var(--vp-c-text-1);font-size:14px">
      <option v-for="r in RATINGS" :key="r" :value="r" :selected="r === 1200">{{ r }}</option>
    </select>
  </div>
  <div>
    <label style="display:block;font-size:12px;color:var(--vp-c-text-2);margin-bottom:4px">Max</label>
    <select id="max-rating" style="height:36px;padding:0 8px;border-radius:8px;border:1px solid var(--vp-c-divider);background:var(--vp-c-bg-soft);color:var(--vp-c-text-1);font-size:14px">
      <option v-for="r in RATINGS" :key="r" :value="r" :selected="r === 1600">{{ r }}</option>
    </select>
  </div>
  <button id="roll-btn"
    style="height:36px;padding:0 20px;border-radius:8px;border:1px solid var(--vp-c-brand-1);background:var(--vp-c-brand-1);color:#fff;font-size:14px;font-weight:500;cursor:pointer"
    @click="roll(+$el.closest('div').querySelector('#min-rating').value, +$el.closest('div').querySelector('#max-rating').value)">
    🎲 Random Problem
  </button>
</div>