const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function(login) {
  if (login.length < 4 && login.length > 16) {
    console.log('Ошибка! Логин должен быть от 4 до 16 символов');
    break;
  }
  return true;
};

const isLoginUnique = function(allLogins, login) {
  const uniqueLogin = !allLogins.includes(login);
  if (!uniqueLogin) {
    console.log('Такой логин уже используется!');
    break;
  }
  return uniqueLogin;
};

const addLogin = function(allLogins, login) {
//   isLoginValid(login);
//   isLoginUnique(logins, login);
  if (isLoginValid && isLoginUnique) {
    console.log('Логин успешно добавлен!');
  }
//   break;
};

// console.log(isLoginValid('Ajax'));
console.log(addLogin(logins,'Ajax')); // 'Логин успешно добавлен!'

console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
