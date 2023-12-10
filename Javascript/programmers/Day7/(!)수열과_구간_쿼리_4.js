function solution(arr, queries) {
  queries.forEach(([s, e, k]) => {
    arr.forEach((item, i) => {
      if (i >= s && i <= e) arr[i] += i % k === 0 ? 1 : 0;
    });
  });
  return arr;
}

console.log(solution([1, 2, 3, 4, 5], [[1, 1, 4]])); // [ 1, 2, 3, 4, 5 ]
console.log(solution([1, 2, 3, 4, 5], [[1, 3, 3]])); // [ 1, 2, 3, 5, 5 ]
// prettier-ignore
console.log(solution([0, 1, 2, 4, 3],[[0, 4, 1],[0, 3, 2],[0, 3, 3],])); // [ 3, 2, 4, 6, 4 ]
