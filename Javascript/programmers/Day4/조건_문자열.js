console.log(solution("<", "=", 20, 50));

function solution(ineq, eq, n, m) {
  var x = ineq + eq;
  switch (x) {
    case "<=":
      return n <= m ? 1 : 0;
    case ">=":
      return n >= m ? 1 : 0;
    case "<!":
      return n < m ? 1 : 0;
    case ">!":
      return n > m ? 1 : 0;
  }
}
