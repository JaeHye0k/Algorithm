// switch문 사용해서 case별로 각각 다른 행동 하기
function solution(n, slicer, num_list) {
  let [a, b, c] = [...slicer];
  switch (n) {
    case 1:
      return num_list.slice(0, b + 1);
    case 2:
      return num_list.slice(a);
    case 3:
      return num_list.slice(a, b + 1);
    case 4:
      return num_list.slice(a, b + 1).filter((_, i) => !(i % c));
  }
}
