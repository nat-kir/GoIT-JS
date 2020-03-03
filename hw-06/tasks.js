import users from './users.js';

// task 1

const getUserNames = users => users.map(user => user.name);
console.log(getUserNames(users));

// task 2
const getUsersWithEyeColor = (users, color) =>
  users.filter(user => user.eyeColor === color);

console.log(getUsersWithEyeColor(users, 'blue'));

// task 3
const getUsersWithGender = (users, gender) =>
  users.filter(user => user.gender === gender).map(user => user.name);

console.log(getUsersWithGender(users, 'male'));

// task 4
const getInactiveUsers = users => users.filter(user => !user.isActive);

console.log(getInactiveUsers(users));

//   task 5

const getUserWithEmail = (users, email) =>
  users.find(user => user.email === email);

console.log(getUserWithEmail(users, 'shereeanthony@kog.com'));
console.log(getUserWithEmail(users, 'elmahead@omatom.com'));

// task 6
const getUsersWithAge = (users, min, max) =>
  users.filter(user => user.age >= min && user.age <= max);

console.log(getUsersWithAge(users, 20, 30));

console.log(getUsersWithAge(users, 30, 40));

// task 7
const calculateTotalBalance = users =>
  users.reduce((totalBalance, user) => totalBalance + user.balance, 0);

console.log(calculateTotalBalance(users));

//   task 8
const getUsersWithFriend = (users, friendName) =>
  users
    .filter(user => user.friends.includes(friendName))
    .map(user => user.name);

console.log(getUsersWithFriend(users, 'Briana Decker'));
console.log(getUsersWithFriend(users, 'Goldie Gentry'));

//   task 9
const getNamesSortedByFriendsCount = users =>
  users
    .sort((userA, userB) => userA.friends.length - userB.friends.length)
    .map(user => user.name);

console.log(getNamesSortedByFriendsCount(users));

// task 10
const getSortedUniqueSkills = users =>
  users.reduce((allSkills, { skills }) => [...allSkills, ...skills], [])
  .filter((skills, index, allSkills) => allSkills.indexOf(skills) === index)
  .sort();
console.log(getSortedUniqueSkills(users));

