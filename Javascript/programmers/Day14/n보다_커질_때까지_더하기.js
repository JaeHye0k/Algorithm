function solution(numbers, n) {
  var sum = 0;
  for (let number of numbers) {
    if (sum > n) break;
    sum += number;
  }
  return sum;
}
