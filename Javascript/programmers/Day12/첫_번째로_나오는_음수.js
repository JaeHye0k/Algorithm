// 배열을 순회하다가 0보다 작은 수를 발견하면 해당 수를 리턴,
// 배열의 끝에 도달했는데 음수를 발견하지 못하면 -1리턴.
function solution(num_list) {
  return num_list.findIndex((e) => e < 0);
}
