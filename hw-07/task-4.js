const decrementBtnRef = document.querySelector(
  'button[data-action="decrement"]',
);
const incrementBtnRef = document.querySelector(
  'button[data-action="increment"]',
);
const spanValue = document.querySelector('span');

decrementBtnRef.addEventListener('click', () => {
  spanValue.textContent = Number(spanValue.textContent) - 1;
});
incrementBtnRef.addEventListener('click', () => {
  spanValue.textContent = Number(spanValue.textContent) + 1;
});
