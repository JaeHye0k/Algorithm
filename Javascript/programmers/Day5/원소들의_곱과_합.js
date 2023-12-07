console.log(solution([3, 4, 5, 2, 1]));
console.log(solution([5, 7, 8, 3]));

function solution(num_list) {
  var a = num_list.reduce((total, e) => (total *= e));
  var b = num_list.reduce((total, e) => (total += e));
  return a < b ** 2 ? 1 : 0;
}
