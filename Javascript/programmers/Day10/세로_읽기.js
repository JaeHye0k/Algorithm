function solution(my_string, m, c) {
  // 굳이 2차원 배열로 만들지 않고 푸는 법
  return [...my_string].filter((_, i) => i % m === c - 1).join("");
}
