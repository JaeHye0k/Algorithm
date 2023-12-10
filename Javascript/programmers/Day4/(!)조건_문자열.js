const operation = {
  "<=": (n, m) => n <= m,
  ">=": (n, m) => n >= m,
  "<!": (n, m) => n < m,
  ">!": (n, m) => n > m,
};
console.log(solution("<", "=", 20, 50));

function solution(ineq, eq, n, m) {
  const op = operation[ineq + eq];
  return +op(n, m);
}
