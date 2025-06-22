const input = document.querySelector("#name-input");
// console.log(input);
const output = document.querySelector("#name-output");
// console.log(output);

input.addEventListener("input", () => {
  const trimmedValue = input.value.trim();
  output.textContent = trimmedValue === "" ? "Anonymous" : trimmedValue;
});
