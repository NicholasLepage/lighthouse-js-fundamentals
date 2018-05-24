function range (start, end, step) {
  var numbers = [];
  if (start < end && step >= 0 && start !== undefined && end !== undefined && step !== undefined) {
    for (var i = start; i <= end; i += step) {
      numbers.push(i);
    }
  }
  return numbers;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));