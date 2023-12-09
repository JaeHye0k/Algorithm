function solution(arr, queries) {
  queries.map((query) => {
    [arr[query[0]], arr[query[1]]] = [arr[query[1]], arr[query[0]]];
  });
  return arr;
}

console.log(
  solution(
    [0, 1, 2, 3, 4],
    [
      [0, 3],
      [1, 2],
      [1, 4],
    ]
  )
);
