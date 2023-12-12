function solution(number) {
  let answer = [...number].map((e) => Number(e)).reduce((acc, value) => (acc += value));
  return answer % 9;
}

console.log(solution("78720646226947352489"));
