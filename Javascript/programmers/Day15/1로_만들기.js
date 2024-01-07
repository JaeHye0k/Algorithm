function solution(num_list) {
  var count = 0;
  while (!num_list.every((e) => e === 1)) {
    num_list.forEach((e, i) => {
      if (e !== 1) {
        num_list[i] = Math.floor(e / 2);
        count++;
      }
    });
  }
  return count;
}
console.log(solution([12, 4, 15, 1, 14]));
