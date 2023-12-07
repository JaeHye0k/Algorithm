console.log(solution(98, 2));
console.log(solution(34, 3));

function solution(num, n) {
  if (num % n === 0) return 1;
  else return 0;
}
