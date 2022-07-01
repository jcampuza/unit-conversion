const qs = document.querySelector.bind(document);
const lbsEl = qs<HTMLInputElement>('#lbs')!;
const kgsEl = qs<HTMLInputElement>('#kgs')!;
const key = '$$s$$';

function persistState() {
  localStorage.setItem(
    key,
    JSON.stringify({
      kgs: Number(kgsEl.value),
      lbs: Number(lbsEl.value),
    })
  );
}

function reloadState() {
  try {
    const values = JSON.parse(localStorage.getItem(key) ?? '{}');
    lbsEl.value = values.lbs;
    kgsEl.value = values.kgs;
  } catch {}
}

function updateValuesFromKgs() {
  const value = Number(kgsEl.value) * 2.205;
  lbsEl.value = value.toFixed(2);
  persistState();
}

function updateValuesFromLbs() {
  const value = Number(lbsEl.value) / 2.205;
  kgsEl.value = value.toFixed(2);
  persistState();
}

reloadState();
kgsEl.addEventListener('input', updateValuesFromKgs);
lbsEl.addEventListener('input', updateValuesFromLbs);
