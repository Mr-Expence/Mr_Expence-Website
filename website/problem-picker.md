---
title: Problem Picker
---

<script setup>
async function rollProblem() {
  const btn = document.getElementById('roll-btn')
  const min = +document.getElementById('min-rating').value
  const max = +document.getElementById('max-rating').value
  btn.textContent = 'Loading…'
  btn.disabled = true
  try {
    const res = await fetch('https://codeforces.com/api/problemset.problems')
    const json = await res.json()
    const pool = json.result.problems.filter(p => p.rating >= min && p.rating <= max)
    if (!pool.length) { alert(`No problems found between ${min}–${max}.`); return }
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

# Problem Picker

<div style="display:flex;gap:10px;align-items:flex-end;flex-wrap:wrap;margin:1.5rem 0">
  <div>
    <label style="display:block;font-size:12px;color:var(--vp-c-text-2);margin-bottom:4px">Min rating</label>
    <select id="min-rating" style="height:36px;padding:0 8px;border-radius:8px;border:1px solid var(--vp-c-divider);background:var(--vp-c-bg-soft);color:var(--vp-c-text-1);font-size:14px">
      <option value="800">800</option>
      <option value="900">900</option>
      <option value="1000">1000</option>
      <option value="1100">1100</option>
      <option value="1200" selected>1200</option>
      <option value="1300">1300</option>
      <option value="1400">1400</option>
      <option value="1500">1500</option>
      <option value="1600">1600</option>
      <option value="1700">1700</option>
      <option value="1800">1800</option>
      <option value="1900">1900</option>
      <option value="2000">2000</option>
      <option value="2100">2100</option>
      <option value="2200">2200</option>
      <option value="2300">2300</option>
      <option value="2400">2400</option>
      <option value="2500">2500</option>
      <option value="2600">2600</option>
      <option value="2700">2700</option>
      <option value="2800">2800</option>
      <option value="2900">2900</option>
      <option value="3000">3000</option>
      <option value="3500">3500</option>
    </select>
  </div>
  <div>
    <label style="display:block;font-size:12px;color:var(--vp-c-text-2);margin-bottom:4px">Max rating</label>
    <select id="max-rating" style="height:36px;padding:0 8px;border-radius:8px;border:1px solid var(--vp-c-divider);background:var(--vp-c-bg-soft);color:var(--vp-c-text-1);font-size:14px">
      <option value="800">800</option>
      <option value="900">900</option>
      <option value="1000">1000</option>
      <option value="1100">1100</option>
      <option value="1200">1200</option>
      <option value="1300">1300</option>
      <option value="1400">1400</option>
      <option value="1500">1500</option>
      <option value="1600" selected>1600</option>
      <option value="1700">1700</option>
      <option value="1800">1800</option>
      <option value="1900">1900</option>
      <option value="2000">2000</option>
      <option value="2100">2100</option>
      <option value="2200">2200</option>
      <option value="2300">2300</option>
      <option value="2400">2400</option>
      <option value="2500">2500</option>
      <option value="2600">2600</option>
      <option value="2700">2700</option>
      <option value="2800">2800</option>
      <option value="2900">2900</option>
      <option value="3000">3000</option>
      <option value="3500">3500</option>
    </select>
  </div>
  <button id="roll-btn" @click="rollProblem" style="height:36px;padding:0 20px;border-radius:8px;border:1px solid var(--vp-c-brand-1);background:var(--vp-c-brand-1);color:#fff;font-size:14px;font-weight:500;cursor:pointer">
    🎲 Random Problem
  </button>
</div>