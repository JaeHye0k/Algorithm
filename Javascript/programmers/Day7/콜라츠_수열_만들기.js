//1. x 가 짝수면 2로 나누고, x 가 홀수면 3*x+1을 한다.          x%2===0? x/2 : 3*x+1
//2. 1번을 진행해서 나온 x를 배열에 삽입한다.
//3. 1~2를 x가 1이 나올때까지 계속한다.
//4. x 가 1이 되면 멈추고 그동안 기록한 x를 배열로 반환한다.      if(x===1) retrun answer

function solution(n, arr = []) {
  arr.push(n);
  if (n === 1) return arr;
  return solution(n % 2 === 0 ? n / 2 : 3 * n + 1, arr);
}

console.log(solution(10));
