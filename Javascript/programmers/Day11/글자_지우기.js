// indices에 대응하는 my_string 배열의 인덱스 값을 0으로 변경한 다음 filter로 0이 아닌 요소만 추출하기
function solution(my_string, indices) {
  my_string = [...my_string];
  indices.forEach((v) => (my_string[v] = 0));
  return my_string.filter((e) => e !== 0).join("");
}

console.log(solution("apporoograpemmemprs", [1, 16, 6, 15, 0, 10, 11, 3]));
