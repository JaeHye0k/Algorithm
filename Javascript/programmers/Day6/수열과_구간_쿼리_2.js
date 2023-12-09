function solution(arr, queries) {
  return queries.map(([s, e, k]) => {
    var result = Math.min(...arr.slice(s, e + 1).filter((e) => e > k));
    return result === Infinity ? -1 : result;
  });
}

console.log(
  solution(
    [0, 1, 2, 4, 3],
    [
      [0, 4, 2],
      [0, 3, 2],
      [0, 2, 2],
    ]
  )
);
