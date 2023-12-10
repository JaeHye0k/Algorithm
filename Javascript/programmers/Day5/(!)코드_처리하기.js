console.log(solution("abc1abc1abc"));

function solution(code) {
  var mode = 0;
  var ret = "";
  for (var i = 0; i < code.length; i++) {
    if (code[i] === "1") mode = Number(!mode); // 1을 만나면 mode switch
    else ret += i % 2 === mode ? code[i] : ""; // 1이 아닐때(문자일 때)
  }
  return ret === "" ? "EMPTY" : ret;
}
