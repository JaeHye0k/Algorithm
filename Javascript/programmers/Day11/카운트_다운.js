function solution(start, end_num) {
  //prettier-ignore
  return Array(start-end_num).fill(start).map((v,i)=>v-i);
}
