const form = document.querySelector("#recipe-form");
form.querySelector('[name="save"]').addEventListener("click", () => {
  const inputs = form.querySelectorAll("[name]");
  const values = {};

  for (const input of inputs) {
    if (input.type === "number") {
      values[input.name] = Number(input.value);
    } else if (input.type === "checkbox") {
      if (input.checked) {
        values[input.name] = input.value;
      } else {
        values[input.name] = "";
      }
    } else {
      values[input.name] = input.value;
    }
  }
  console.log(values);
});
