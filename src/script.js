// // let arr = [1, 2, 3];

// // for (const item of arr) {
// // }

// // for (let i = 0; i < 10; i++) {
// //   // console.log(i);
// // }


// // let i = 0;
// // while (i < 10) {
// //   // console.log(i);
// //   i++;
// // }

// // let val = Math.random();
// // while (val < 0.2) {
// //   console.log(val);
// //   val = Math.random();
// // }

// // do {
// // } while (val < 0.2);

// function randomNumbers(count) {
//   for (let i = 0; i < count; i++) {
//     console.log(Math.random());
//   }
//   count = 20;
// }

// let c = 3;
// randomNumbers(c);
// console.log('c = ' + c);

// function addToArray(arr) {
//   // let newArr = [3, 4, 5];
//   // arr = newArr;
//   arr.push(20);
// }

// let a = [1, 2, 3];
// addToArray(a, 4, 'a', 'squirrel');
// console.log('a:', a);

// // addToArray();
// // console.log('added');

// function moreRandomNumbers(count, min, maxOrPrefix) {
//   let prefix = 'prefix';
//   let max = 10;

//   if (typeof maxOrPrefix === 'string') {
//     prefix = maxOrPrefix;
//   } else if (typeof maxOrPrefix === 'number') {
//     max = maxOrPrefix;
//   }

//   if (min === undefined) {
//     min = 1;
//   }
//   for (let i = 0; i < count; i++) {
//     console.log(prefix + ' ' + Math.round(Math.random() * (max - min) + min));
//   }
// }

// moreRandomNumbers(10, 5, 'value');

function lineOfRandomNumbers(count) {
  const max = 10;
  const min = 1;
  const numbers = [];

  for (let i = 0; i < count; i++) {
    numbers.push(Math.round(Math.random() * (max - min) + min));
  }

  // console.log(numbers);
  // console.log('last number: ' + numbers.pop());
  console.log(numbers);

  // function printNumber(x, y) {
  //   console.log(x, y);
  // }

  // numbers.forEach(console.log);
  console.log('numbers:', numbers);

  // const smallNumbers = numbers.filter(function (val) {
  //   return val < 4;
  // });

  // console.log('small:', smallNumbers);

  // const biggerNumbers = numbers.map(function (val) {
  //   return val;
  // });

  // console.log('bigger:', biggerNumbers);
  
  const numbers2 = numbers;
  numbers2.pop();

  console.log('numbers:', numbers);

  const middleNumbers = numbers.slice();
  console.log('middle:', middleNumbers);
  middleNumbers.pop();
  console.log('middle:', middleNumbers);
  console.log('numbers:', numbers);

  const mapper = (val) => {
    return val;
  };
  
  const biggerNumbers = numbers.map(mapper);

}

lineOfRandomNumbers(10);

// console.log(lineOfRandomNumbers);

/*
const rand = function (count) {
  console.log('rand: ' + count);
}

// rand(24);
// console.log(rand);

// let farr = [rand, moreRandomNumbers, lineOfRandomNumbers];
// farr[0](20);

// function printVal(count, getVal) {
//   for (let i = 0; i < count; i++) {
//     console.log(`${getVal()}`);
//   }
// }

// printVal(10, Math.random);

function animal() {
  const arr = ['cat', 'dog', 'rabbit', 'ferret', 'duck', 'catdog'];
  const i = Math.floor(Math.random() * arr.length);
  return arr[i];
}

// printVal(10, animal);

// printVal(10, function () { return 'foo'; });

function outer() {
  const someValue = 'value in outer';

  function inner(message) {
    console.log(someValue + ', [' + message + ']');
  }

  return inner;
}

// let f = outer();
// f('from outside');
// console.log(someValue);
//

let val = 20;

export function updateVal() {
  val++;
}

export { animal, outer, rand, val };
*/
