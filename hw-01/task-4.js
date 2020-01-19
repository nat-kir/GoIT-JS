let credits = 23580;
const pricePerDroid = 3000;
const quantityOfDroids = prompt('Укажите количество дроидов:');
let message;
let totalPrice;

if (quantityOfDroids === null) {
  message = 'Отменено пользователем';
} else {
  totalPrice = pricePerDroid * quantityOfDroids;

  if (totalPrice > credits) {
    message = 'Недостаточно средств на счету';
  } else {
    credits -= totalPrice;
    message = `Вы купили ${quantityOfDroids} дроидов, на счету осталось ${credits} кредитов.`;
  }
}
console.log(message);
