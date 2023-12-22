// l은 있고 r은 없는 경우   l의 인덱스
// r은 있고 l은 없는 경우   r의 인덱스
// l과 r 둘 다 있는 경우    먼저 나오는 것의 인덱스
// l과 r 둘 다 없는 경우    -1
function solution(str_list) {
  var l_r = str_list.findIndex((v) => v === "l" || v === "r");
  if (l_r === -1) return [];
  return str_list.at(l_r) === "l" ? str_list.slice(0, l_r) : str_list.slice(l_r + 1);
}
