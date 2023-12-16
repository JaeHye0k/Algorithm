// 1) for문을 이용해서 1~n 까지 i를 1씩 증가시키며 i가 k의 배수인지 확인하는 방법
// 시간 복잡도: log(N)
// n의 최대값 1,000,000

// 2) for문을 이용해서 k~n 까지 i를 k씩 증가시키며 i를 배열에 저장하는 방법 (값을 비교할 필요 없음)

function solution(n, k) {
  const answer = [];
  for (let i = k; i <= n; i += k) answer.push(i);
  return answer;
}
