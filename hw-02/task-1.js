const logItems = function(array) {
  for (const element of array) {
    let i = array.indexOf(element) + 1;
    console.log(`${i} - ${element}`);
  };
};
logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
