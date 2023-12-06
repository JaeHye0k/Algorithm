let result = solution("He11oWor1d", "lloWorl", 2);
console.log(result);

// function solution(my_string, overwrite_string, s) {
//   my_string = my_string.split(""); // 문자열 -> 배열
//   my_string.splice(s, overwrite_string.length, overwrite_string);
//   my_string = my_string.join(""); // 배열 -> 문자열
//   return my_string;
// }

function solution(my_string, overwrite_string, s) {
  return my_string.slice(0, s) + overwrite_string + my_string.slice(s + overwrite_string.length);
}
