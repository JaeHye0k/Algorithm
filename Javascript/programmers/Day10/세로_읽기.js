function solution(my_string, m, c) {
  // 문자열을 m개씩 끊어 2차원 배열로 만들어서 행열 구조로 만듦
  const arr = [];
  for (var i = 0; i < my_string.length; i += m) {
    arr.push([...my_string].slice(i, i + m));
  }
  // 각 행의 c열에 들어있는 값을 반환한 뒤 문자열로 합치기
  return arr.map((e) => e[c - 1]).join("");
}
