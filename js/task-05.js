const DEFAULT_VALUE = "Anonymous";
const ref = {
  input: document.querySelector("input#name-input"),
  output: document.querySelector("span#name-output"),
};

ref.input.addEventListener("input", handleInput);

function handleInput(element) {
  ref.output.textContent =
    element.target.value === "" ? DEFAULT_VALUE : element.target.value;
}
