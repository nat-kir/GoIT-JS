const boxesRef = document.querySelector('#boxes');
const inputNumberRef = document.querySelector('#getNumber');
const renderBoxBtnRef = document.querySelector('button[data-action="render"]');
const destroyBoxBtnRef = document.querySelector(
  'button[data-action="destroy"]',
);

// renderBoxBtnRef.addEventListener('click', createBoxes);
// destroyBoxBtnRef.addEventListener('click', destroyBoxes);

// function createBoxes(amount){

// }
inputNumberRef.addEventListener('input', event => {
    return event.target.value;
  });
  console.log(inputNumberRef);
// renderBoxBtnRef.addEventListener('click', () => {
  
// });
// console.log(inputNumberRef.target.value)

// for (let i=0; i <= event.target.value; i+=1){
//     const box = document.createElement('div');
//     box.classList.add('box');
//     box.textcontent = "ghbdtn";
//     boxesRef.appendChild(box);
//   };
