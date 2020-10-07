module.exports = function toReadable(number) {
  let names = {
    0: '',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen'
  };
  let x = Math.trunc(number / 100);
  let y = Math.trunc((number - 100 * x) / 10);
  let z = number % 10;
  let a = names[Math.trunc(number / 100)];
  let b = names[Math.trunc((number - 100 * x) / 10)];
  let c = names[number % 10];
  if (x === 0 && y === 0 && z === 0) {
    return 'zero';
  }
  
  if (y === 0 && z !== 0) {
    return `${a} hundred ${names[z]}`;
  }
  if (y === 0 && z === 0) {
    return `${a} hundred`;
  }
  if (y === 1 && x !== 0) {
    return `${a} hundred ${names[Math.trunc(number - 100 * x)]}`;
  }
  if (y === 1 && x === 0) {
    return `${names[Math.trunc(number - 100 * x)]}`;
  }
  if (y === 2) {
    b = 'twen';
  } else if (y === 3) {
    b = 'thir';
  } else if (y === 4) {
    b = 'for';
  } else if (y === 5) {
    b = 'fif';
  } else if (y === 8) {
    b = 'eigh';
  }
  if (x === 0 && z !== 0) {
    return `${b}ty ${c}`;  
  }
  if (x === 0 && z === 0) {
    return `${b}ty`;
  }
  if (z === 0) {
    return `${a} hundred ${b}ty`;
  }

  return `${a} hundred ${b}ty ${c}`;
}
