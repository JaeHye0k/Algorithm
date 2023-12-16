// 1) indices에 대응하는 my_string 배열의 인덱스 값을 0으로 변경한 다음 filter로 0이 아닌 요소만 추출하기
// 2) my_string을 순회하면서 현재 인덱스가 indices에 포함되어있지 않은 인덱스의 원소들만 추출하기

function solution(my_string, indices) {
  return [...my_string].filter((_, i) => !indices.includes(i)).join("");
}

console.log(solution("apporoograpemmemprs", [1, 16, 6, 15, 0, 10, 11, 3]));
