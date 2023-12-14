// intStrs 배열의 각 원소 순환 (array.prototype.forEach / array.prototype.map)
// intStrs[i] 의 s + l을 잘라내 정수로 변환
// 변환한 정수값이 k보다 크면 return 아니면 skip
// 최종적으로 k보다 큰 값들이 배열에 담김

function solution(intStrs, k, s, l) {
  return intStrs.map((e) => +e.slice(s, s + l)).filter((e) => e > k);
}
