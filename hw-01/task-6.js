let total = 0;

do {
  let input = prompt('Введите число');

  if (input === null) {
    console.log('Отменено пользователем!');
    break;
  }
  input = Number(input);

  const notANumber = Number.isNaN(input);

  if (notANumber) {
    console.log('Не число, пропускаем');
    continue;
  }

  total += input;
} while (true);

alert(`Общая сумма чисел равна ${total}`);
