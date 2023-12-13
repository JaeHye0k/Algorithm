//queries.forEach(([s,e])=>{})
//slice로 추출하고, reverse로 뒤집고, splice로 원래 위치에 있는 요소랑 치환

function solution(my_string, queries) {
  let stringArr = [...my_string];
  queries.forEach(([s, e]) => {
    var reversedWord = stringArr.slice(s, e + 1).reverse();
    stringArr.splice(s, reversedWord.length, ...reversedWord);
  });
  return stringArr.join("");
}

console.log(
  solution("rermgorpsam", [
    [2, 3],
    [0, 7],
    [5, 9],
    [6, 10],
  ])
);
