const convert = {
  1: "w",
  "-1": "s",
  10: "d",
  "-10": "a",
};

function solution(numLog) {
  // prettier-ignore
  return numLog.slice(1).map((e, i) => {
      return convert[e - numLog[i]];
    }).join("");
}

console.log(solution([0, 1, 0, 10, 0, 1, 0, 10, 0, -1, -2, -1]));
