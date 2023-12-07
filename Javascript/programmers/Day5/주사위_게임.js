console.log(solution(2, 6, 1));
console.log(solution(5, 3, 3));
console.log(solution(4, 4, 4));

function solution(a, b, c) {
  if (a === b && b === c) return (a + b + c) * (a * a + b * b + c * c) * (a * a * a + b * b * b + c * c * c);
  else if (a === b || b === c || c === a) return (a + b + c) * (a * a + b * b + c * c);
  else return a + b + c;
}
