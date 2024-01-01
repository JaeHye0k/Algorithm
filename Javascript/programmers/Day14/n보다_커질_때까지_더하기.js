function solution(numbers, n) {
  return numbers.reduce((acc, val) => (acc > n ? acc : acc + val));
}
