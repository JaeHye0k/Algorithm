function solution(start, end_num) {
  const result = [];
  while (start >= end_num) result.push(start--);
  return result;
}
