const inputNameRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');

inputNameRef.addEventListener('input', event => {
  event.target.value.length === 0
    ? (outputRef.textContent = 'незнакомец')
    : (outputRef.textContent = event.target.value);
});
