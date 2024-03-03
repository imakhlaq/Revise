function counter() {
  let count = 0;

  function increase() {
    count++;
  }

  function decrease() {
    count--;
  }

  function getValue() {
    return count;
  }

  return { increase, decrease, getValue };
}

const counter1 = counter();
const counter2 = counter();

counter1.increase();
counter1.increase();
counter2.decrease();

console.log(counter1.getValue());
console.log(counter2.getValue());

// real world


