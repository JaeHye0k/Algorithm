function solution(my_string, s, e) {
  my_string = [...my_string];
  // prettier-ignore
  const reversedStr = my_string.slice(s, e + 1).reverse().join("");
  my_string.splice(s, reversedStr.length, reversedStr);
  return my_string.join("");
}

console.log(solution("Progra21Sremm3", 6, 12));
