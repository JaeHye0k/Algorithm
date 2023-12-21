function solution(arr, query) {
  query.forEach((v, i) => {
    arr = i % 2 ? arr.filter((_, i2) => i2 >= v) : arr.filter((_, i2) => i2 <= v);
  });
  return arr;
}
