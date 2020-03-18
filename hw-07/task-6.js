const validationInputRef = document.querySelector('#validation-input');

validationInputRef.addEventListener('blur', event => {
  Number(validationInputRef.dataset.length) !== event.currentTarget.value.length
    ? validationInputRef.classList.add('invalid')
    : validationInputRef.classList.replace('invalid', 'valid');
});
