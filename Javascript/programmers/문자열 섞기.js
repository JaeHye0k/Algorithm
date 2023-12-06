let str1 = "aaaaa";
let str2 = "bbbbb";
console.log(solution(str1, str2));

function solution(str1, str2) {
  // str1에서 한글자, str2에서 한글자씩 반복문을 사용해서 일일히 추가하기
  let answer = "";
  for (let i = 0; i < str1.length; i++) {
    answer += str1.substring(i, i + 1);
    answer += str2.substring(i, i + 1);
  }
  return answer;
}
