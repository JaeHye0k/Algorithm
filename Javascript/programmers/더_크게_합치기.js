console.log(solution(9, 91));
console.log(solution(89, 8));

function solution(a, b) {
  a = a.toString();
  b = b.toString();
  var a_plus_b = a + b;
  var b_plus_a = b + a;
  a_plus_b = parseInt(a_plus_b);
  b_plus_a = parseInt(b_plus_a);
  return a_plus_b >= b_plus_a ? a_plus_b : b_plus_a;
}
