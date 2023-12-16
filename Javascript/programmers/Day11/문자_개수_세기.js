// 길이가 52인 정수 배열 (arr[0]~[25] = A~Z, arr[26]~[52] = a~z)
// my_string 문자열의 각각 문자를 순회하며 문자의 아스키 코드 값을 이용
// A~Z = 65[0]~90[25]       대문자의 경우 아스키 코드와 인덱스 값의 차이 = 65
// a~z = 97[26]~122[52]     소문자의 경우 아스키 코드와 인덱스 값의 차이 = 71

function solution(my_string) {
  // 길이가 52인 정수 배열 생성
  const answer = Array(52).fill(0);
  [...my_string].forEach((e) => {
    // 현재 요소가 소문자일 경우
    if (e.charCodeAt() >= "a".charCodeAt()) answer[e.charCodeAt() - 71] += 1;
    // 현재 요소가 소문자가 아닐 경우(대문자일 경우)
    else answer[e.charCodeAt() - 65] += 1;
  });
  return answer;
}
