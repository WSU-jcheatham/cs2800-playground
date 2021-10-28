const form = document.querySelector('#userdata');
const save = form.querySelector('#save');
const reset = form.querySelector('#reset');

save.addEventListener('click', async () => {
  const inputs = form.querySelectorAll('input');

  const params = new URLSearchParams();
  for (const input of inputs) {
    params.set(input.name, input.value);
  }

  const response = await fetch(`/hello?${params}`);
  const text = await response.text();

  const output = document.querySelector('#response');
  output.textContent = text;
});

reset.addEventListener('click', () => {
  const list = document.querySelector('#list');
  const item1 = document.createElement('li');
  item1.textContent = 'Item 1';
  const item2 = document.createElement('li');
  item2.textContent = 'Item 2';
  list.replaceChildren(item1, item2);
});
