const fontSizeControlRef = document.querySelector('#font-size-control');
const textSizeOutputRef = document.querySelector('#text');

fontSizeControlRef.addEventListener('change', event => {
  const textSize = event.target.value + 'px';
  textSizeOutputRef.style.fontSize = textSize;
});
