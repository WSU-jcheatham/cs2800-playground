console.log('hi');

let red = 50;
const box = document.querySelector('#box');

const interval = setInterval(() => {
  box.style.background = `rgb(${red}, 100, 100)`;
  red += 10;

  if (red > 255) {
    clearInterval(interval);
    let opacity = 1;

    const animate = setInterval(() => {
      box.style.opacity = opacity;
      opacity -= 0.01;
    }, 20);

    setTimeout(() => {
      box.style.opacity = 0;
      clearInterval(animate);
    }, 2000);
  }
}, 250);

// console.log('fetching');

// const responsePromise = fetch('/images');

// console.log('got fetch promise');

// responsePromise.then((resp) => {
//   return resp.json();
// }).then((imageList) => {
//   console.log(imageList);
//   for (const imageName of imageList) {
//     const img = document.createElement('img');
//     img.src = imageName;
//     document.body.append(img);
//   }
// });

console.log('fetching again');

const response = await fetch('/images');

console.log('got fetch promise');

const imageList = await response.json();
console.log(imageList);
// for (const imageName of imageList) {
//   const img = document.createElement('img');
//   img.src = imageName;
//   document.body.append(img);
// }

const inter = setInterval(() => {
  const imageName = imageList.pop();
  const img = document.createElement('img');
  img.src = imageName;
  document.body.append(img);

  if (imageList.length === 0) {
    clearInterval(inter);
  }
}, 3000);

console.log('done');
