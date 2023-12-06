console.log(solution(9, 91));
console.log(solution(89, 8));

function solution(a, b) {
  return Math.max(Number(`${a}${b}`), Number(`${b}${a}`));
}
