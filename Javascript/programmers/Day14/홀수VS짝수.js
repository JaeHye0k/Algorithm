// 홀수번째 수의 합과 짝수번째 수의 합중 크거나 같은 수 리턴.
// 첫 번째 원소가 1번 원소이므로 홀 짝 뒤집힘
function solution(num_list) {
  var even = 0;
  var odd = 0;
  num_list.forEach((e, i) => {
    if (i % 2 === 0) odd += e;
    else even += e;
  });
  return odd >= even ? odd : even;
}
