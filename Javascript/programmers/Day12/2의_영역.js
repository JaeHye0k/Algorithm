// 처음 2를 발견한 인덱스(findIndex) 기억, 마지막으로 2를 발견한 인덱스(findLastIndex) 기억 후 slice로 자르기.
// 프로그래머스 테스트 환경이 findLastIndex를 지원하지 않음
function solution(arr) {
  var last_index = -1;
  arr.forEach((e, i) => {
    if (e === 2) last_index = i;
  });
  //prettier-ignore
  var answer = arr.slice(arr.findIndex(e=>e===2), last_index+1);
  return answer.length ? answer : [-1];
}

console.log(solution([1, 1, 1]));
