console.log(solution([3, 4, 5, 2, 1]));

function solution(num_list) {
  var even = num_list.filter((e) => e % 2 === 0);
  var odd = num_list.filter((e) => e % 2 === 1);
  even = even.join("");
  odd = odd.join("");
  return Number(even) + Number(odd);
}
