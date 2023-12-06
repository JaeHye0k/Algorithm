let str1 = "aaaaa";
let str2 = "bbbbb";
console.log(solution(str1, str2));

function solution(str1, str2) {
  return [...str1].map((e, idx) => e + str2[idx]).join(""); // ["ab","ab","ab","ab","ab"] -> "ababababab"
}
