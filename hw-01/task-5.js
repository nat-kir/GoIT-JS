const countryInputRef = document.querySelector('.country');
const buttonRef = document.querySelector('.button');
let cost;

buttonRef.addEventListener('click', () => {
  let countryDelivery = countryInputRef.value;
  countryDelivery = countryDelivery.toLowerCase();

  switch (countryDelivery) {
    case 'китай':
      cost = 100;
      alert(`Доставка в ${countryDelivery}, будет стоить ${cost} кредитов`);
      break;

    case 'чили':
      cost = 250;
      alert(`Доставка в ${countryDelivery}, будет стоить ${cost} кредитов`);
      break;

    case 'австралия':
      cost = 170;
      alert(`Доставка в ${countryDelivery}, будет стоить ${cost} кредитов`);
      break;

    case 'индия':
      cost = 80;
      alert(`Доставка в ${countryDelivery}, будет стоить ${cost} кредитов`);
      break;

    case 'ямайка':
      cost = 120;
      alert(`Доставка в ${countryDelivery}, будет стоить ${cost} кредитов`);
      break;

    default:
      alert('В вашей стране доставка недоступна');
  }
});
