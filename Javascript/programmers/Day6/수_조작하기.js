const operation = {
  w: (n) => n + 1,
  s: (n) => n - 1,
  d: (n) => n + 10,
  a: (n) => n - 10,
};

function solution(n, control) {
  return [...control].reduce((total, e) => operation[e](total), n);
}

console.log(solution(0, "wsdawsdassw"));
