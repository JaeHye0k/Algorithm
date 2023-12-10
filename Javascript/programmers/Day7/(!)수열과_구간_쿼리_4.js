function solution(arr, queries) {
  queries.forEach(([s, e, k]) => {
    arr.slice(s, e + 1).forEach((item, i) => {
      i % k === 0 ? (arr[i] += 1) : (arr[i] += 0);
    });
  });
  return arr;
}

console.log(solution([1, 2, 3, 4, 5], [[0, 1, 4]])); // [2, 2, 3, 4, 5]
console.log(solution([1, 2, 3, 4, 5], [[1, 3, 3]])); // [2, 2, 3, 4, 5]
