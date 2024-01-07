function solution(arr) {
  var count = 0;
  while (true) {
    var temp_arr = arr.map((e) => (e >= 50 && !(e % 2) ? e / 2 : e < 50 && e % 2 ? e * 2 + 1 : e));
    if (arr.every((e, i) => e === temp_arr[i])) return count;
    else arr = temp_arr;
    count++;
  }
}

console.log(solution([1, 2, 3, 100, 99, 98]));
