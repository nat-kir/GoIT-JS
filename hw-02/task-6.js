let input;
const numbers = [];
let total = 0;

do {
  let input = prompt('Введите число');

  if (input === null) {
    if (numbers.length <1) {
      console.log(`Ничего не было введено`);
    break;    
    } 
    for (const number of numbers) {
      total += number;
    }
    console.log(`Общая сумма чисел равна ${total}`);
    break;
  }
  
  input = Number(input);
  numbers.push(input);
  const notANumber = Number.isNaN(input);

  if (notANumber) {
    console.log('Было введено не число, попробуйте еще раз');
    break;
  }
} while (true);
