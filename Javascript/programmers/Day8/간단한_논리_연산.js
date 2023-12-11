// (x1 ∨ x2) ∧ (x3 ∨ x4) 의 결과를 return
// ∨  = or연산, ∧ = and 연산

function solution(x1, x2, x3, x4) {
  return (x1 || x2) && (x3 || x4);
}

console.log(solution(false, true, true, true));
