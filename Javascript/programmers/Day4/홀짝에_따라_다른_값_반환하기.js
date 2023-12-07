console.log(solution(7));
console.log(solution(10));

function solution(n) {
  var answer = 0;
  for (var i = 0; i <= n; i += 2) {
    if (n % 2 === 1) answer += i + 1;
    else answer += i * i;
  }
  return answer;
}
