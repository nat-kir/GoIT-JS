const formatString = function(string) {
  const stringArray = string.split('');

  if (stringArray.length < 41) {
    return string;
  }
  let deletedArray = stringArray.splice(40);
  let delettedArrayB = stringArray.splice(40, 0, '...');
  return stringArray.join('');
};

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));

console.log(formatString('Curabitur ligula sapien.'));

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);
