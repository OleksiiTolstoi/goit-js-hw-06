const ref = {
  input: document.querySelector("#font-size-control"),
  text: document.querySelector("#text"),
};

ref.input.addEventListener("input", handleInput);

function handleInput() {
  ref.text.style.fontSize = `${ref.input.value}px`;
}
