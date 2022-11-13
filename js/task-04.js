const counterValue = {
  value: 0,
  increment() {
    console.log("increment => this", this);
    this.value += 1;
  },
  decrement() {
    console.log("decrement => this", this);
    this.value -= 1;
  },
};

const decrementBTn = document.querySelector('button[data-action="decrement"]');
const incrementBTn = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector("#value");

console.log(valueEl);

decrementBTn.addEventListener("click", function () {
  counterValue.decrement();
  console.log(counterValue);
  valueEl.textContent = counterValue.value;
});

incrementBTn.addEventListener("click", function () {
  counterValue.increment();
  console.log(counterValue);
  valueEl.textContent = counterValue.value;
});
