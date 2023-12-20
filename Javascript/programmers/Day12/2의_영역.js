// 처음 2를 발견한 인덱스(findIndex) 기억, 마지막으로 2를 발견한 인덱스(findLastIndex) 기억 후 slice로 자르기.
// 프로그래머스 테스트 환경이 findLastIndex를 지원하지 않음
function solution(arr) {
  var start = arr.indexOf(2);
  var end = arr.lastIndexOf(2);
  var answer = arr.slice(start, end + 1);
  return answer.length ? answer : [-1];
}

console.log(solution([1, 2, 1]));
