const counter = document.querySelector('h1 span');
const button = document.querySelector('#auto-click');

let count = 0;

document.querySelector('img').addEventListener('click', () => {
  count++;
  counter.textContent = count;

  if (count === 20) {
    button.disabled = false;
  }
});

let clicked = false;

button.addEventListener('click', () => {
  if (!clicked) {
    count -= 20;
    counter.textContent = count;

    setInterval(() => {
      count++;
      counter.textContent = count;
    }, 1000);

    button.disabled = true;
  }
});
