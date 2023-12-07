console.log(solution(60, 2, 3));
console.log(solution(55, 10, 5));

function solution(number, n, m) {
  return number % n === 0 && number % m === 0 ? 1 : 0;
}
