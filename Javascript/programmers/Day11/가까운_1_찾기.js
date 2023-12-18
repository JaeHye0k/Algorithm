// arr: 0과 1로 이루어진 정수 배열
// i >= idx && arr[i] === 1 을 충족하는 인덱스 중 가장 작은 인덱스를 반환
function solution(arr, idx) {
  return arr.findIndex((v, i) => i >= idx && v === 1);
}
