// 문자열 배열: my_strings, 이차원 정수 배열: parts
// parts[i]는 [s,e] 형태로 my_strings[i]의 인덱스 s부터 e까지 부분 문자열을 의미함.
// parts를 다 순회한 뒤 여러개의 부분 문자열을 순서대로 합쳐서 반환.

function solution(my_strings, parts) {
  return parts.map(([s, e], i) => my_strings[i].slice(s, e + 1)).join("");
}
