// 1. 반복문으로 l부터 r까지 돌면서 i가 0과 5로만 이루어져있는지 확인하기
// 0과 5로만 이루어져 있는지 확인하려면 어떤 로직이 필요한가?
// 1-1. i를 문자열 배열로 변환한다. 문자열 배열을 전부 확인하여 0과 5외의 다른 숫자가 있으면 skip한다.

function solution(l, r) {
  const answer = [];
  for (let i = l; i <= r; i++) {
    //debugger;
    if ([...String(i)].every((e) => e === "0" || e === "5")) answer.push(i);
  }
  return answer.length ? answer : [-1];
}

console.log(solution(5, 555));
