console.log('hello again!');

const val1 = 1;
let val2;

// val1 = 24;

console.log(val1);
console.log(val2);

// number - 1, 2, 15.43, -10, Infinity, NaN
// string - "str", 'another', `template string ${val1}`
// boolean - true, false
// undefined

// array - [1, 2, 4, 'one']
// object - { name: 'Jason', height: 5.8, weight: height }

console.log(`template string ${val1}`);

let height = 5.8;
let me = {
  name: 'Jason',
  height: Math.random(),
  // weight: height,
  cars: ['Honda Fit', 'Mercedez E-Class']
}

me.weight = me.height;

console.log(me.name);
console.log(me.height);
console.log(me.weight);

let arr = [5, 7, 9];
console.log(arr[2]);

console.log(me.cars[1]);

console.log(1 == 2);
console.log(1 == 1);
console.log(1 == '1');
console.log(1 === '1');
