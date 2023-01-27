function addNum() {
  let value = 0;
  return function (num) {
    value += num;
    return value;
  };
}

const sum = addNum();

console.log(sum(3));
console.log(sum(5));
console.log(sum(20));
