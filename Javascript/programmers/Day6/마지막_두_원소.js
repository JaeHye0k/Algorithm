console.log(solution([2, 1, 6]));
console.log(solution([5, 2, 1, 7, 5]));

function solution(num_list) {
  var first_to_last = num_list[num_list.length - 1];
  var second_to_last = num_list[num_list.length - 2];
  return num_list.concat(first_to_last > second_to_last ? first_to_last - second_to_last : first_to_last * 2);
}
