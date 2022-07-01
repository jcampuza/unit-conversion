import './style.css';

const app = document.querySelector<HTMLDivElement>('#app')!;
const lbsEl = app.querySelector<HTMLInputElement>('#lbs')!;
const kgsEl = app.querySelector<HTMLInputElement>('#kgs')!;

const persistState = () => {
  const state = JSON.stringify({
    kgs: Number(kgsEl.value),
    lbs: Number(lbsEl.value),
  });
  localStorage.setItem('values', state);
};

const reloadState = () => {
  try {
    const values = JSON.parse(localStorage.getItem('values') ?? '{}');
    lbsEl.value = values.lbs;
    kgsEl.value = values.kgs;
  } catch {}
};

const updateValuesFromKgs = () => {
  const value = Number(kgsEl.value) * 2.205;
  lbsEl.value = value.toFixed(2);

  persistState();
};

const updateValuesFromLbs = () => {
  const value = Number(lbsEl.value) / 2.205;
  kgsEl.value = value.toFixed(2);

  persistState();
};

const addListeners = () => {
  kgsEl.addEventListener('input', updateValuesFromKgs);
  lbsEl.addEventListener('input', updateValuesFromLbs);
};

const main = () => {
  reloadState();
  addListeners();
};

main();
document.body.style.opacity = '';
