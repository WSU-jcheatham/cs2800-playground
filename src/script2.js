// let a = 1;
// let b = 1;

// console.log('before');

// if (a < b) {
//   if (b - a > 3) {
//     console.log('much less than');
//   } else {
//     console.log('less than');
//   }
// } else if (a > b) {
//   console.log('greater than');
// }

// console.log('after');

let arr = ['one', 'fish', 'two', 'fish', 'red', 'fish', 'blue', 'fish'];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

for (let i = 20; i > 1; i--) {
  console.log(i);
}

console.log('----------');

let arr2 = ['one'];
arr2[5] = 'red';
arr2[7] = 'blue';

for (let i = 0; i < arr2.length; i++) {
  console.log(arr2[i]);
}

console.log('----------');

for (const value of arr2) {
  console.log(value);
}

console.log('----------');

let obj = { name: 'Jason', room: 339, building: 'Russ' };

for (const key in obj) {
  console.log(key);
  console.log(obj[key]);
}

console.log('----------');

arr2.forEach((value) => console.log(value));

console.log('-----------');

let a = 5;
let b = 5;
let c = a < b ? 'less than' : 'greater than';

let d = a < b ? 'less than' : a > b ? 'greater than' : 'equal';

// let c;

// if (a < b) {
//   c = 'less than';
// } else {
//   c = 'greater than';
// }

console.log(d);

console.log('---------------');

console.log('cat' + 'dog');

let a1 = 'cat';
let a2 = 'dog';

console.log(a1 + a2);

console.log('I have a ' + a1 + ' and a ' + a2);

let numVal = 23;

console.log(`I have a ${numVal} and a ${a1 + a2}`);
