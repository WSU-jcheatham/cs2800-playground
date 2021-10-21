let interval;
let x = 0;
let y = 0;
let dx = 10;
let dy = 5;

export async function init() {
  const response = await fetch('bouncers.json');
  const bouncers = await response.json();

  const list = document.querySelector('#bouncers');
  for (const bouncer of bouncers) {
    const item = document.createElement('button');
    item.textContent = bouncer.name;
    list.append(item);

    item.addEventListener('click', () => {
      clearInterval(interval);
      startBouncing(bouncer);
    });
  }

  const stop = document.createElement('button');
  stop.textContent = 'Stop';
  stop.addEventListener('click', () => {
    clearInterval(interval);
  });
  list.append(stop);
}

function startBouncing(bouncer) {
  const ball = document.querySelector('#ball');
  const court = document.querySelector('#court');

  ball.src = bouncer.image;
  court.style.background = bouncer.background;

  const audio = new Audio(bouncer.sound);

  interval = setInterval(() => {
    x += dx;
    y += dy;

    if (x + ball.offsetWidth >= court.clientWidth) {
      x = court.clientWidth - ball.offsetWidth;
      dx = -dx;
      audio.play();
    } else if (x <= 0) {
      x = 0;
      dx = -dx;
      audio.play();
    }

    if (y + ball.offsetHeight >= court.clientHeight) {
      y = court.clientHeight - ball.offsetHeight;
      dy = -dy;
      audio.play();
    } else if (y <= 0) {
      y = 0;
      dy = -dy;
      audio.play();
    }

    ball.style.left = `${x}px`;
    ball.style.top = `${y}px`;

    ball.setAttribute('data-dir', dx > 0 ? 'right' : 'left');
  }, 50);
}
