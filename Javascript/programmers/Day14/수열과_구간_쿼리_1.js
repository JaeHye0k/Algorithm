function solution(arr, queries) {
  queries.forEach(([s, e]) => {
    for (var i = s; i <= e; i++) arr[i]++;
  });
  return arr;
}
