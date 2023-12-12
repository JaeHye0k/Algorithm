// Number.MAX_SAFE_INTEGER 보다 큰 정수를 처리하는 방법
// BigInt()

function solution(number) {
  return BigInt(number) % 9n;
}

console.log(solution("78720646226947352489"));
