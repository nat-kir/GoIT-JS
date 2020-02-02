const findBestEmployee = function(employees) {
  let productivityValues = Object.values(employees);

  let bestProductivity = productivityValues[0];

  for (let i = 1; i < productivityValues.length; i += 1) {
    if (bestProductivity < productivityValues[i]) {
      bestProductivity = productivityValues[i];
    }
  }

  return Object.keys(employees).find(
    key => employees[key] === bestProductivity,
  );
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux
