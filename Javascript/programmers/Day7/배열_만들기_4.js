// arr = 정수 배열, i = 반복자, stk = 새로운 배열
//1. i 가 arr의 길이보다 작을경우
// i=0; while(i<arr.length)

//1-1. stk가 빈 배열이라면 arr[i]를 stk에 추가하고 i는 1 증가
// if(stk.length === 0) stk.push(arr[i]); i++;

//1-2. stk가 비어있지 않고 stk의 마지막 원소가 arr[i]보다 작으면 arr[i]를 stk의 뒤에 추가하고 i는 1증가
// if(stk.length !== 0 && stk.at(-1) < arr[i]) stk.push(arr[i]); i++;

//1-3. stk가 비어있지 않고 stk의 마지막 원소가 arr[i]보다 크거나 같으면 stk의 마지막 원소를 제거
// if(stk.length !== 0 && stk.at(-1) >= arr[i]) stk.pop();

function solution(arr) {
  var stk = [];
  var i = 0;
  while (i < arr.length) {
    if (stk.length === 0) stk.push(arr[i++]);
    else if (stk.length !== 0 && stk.at(-1) < arr[i]) stk.push(arr[i++]);
    else stk.pop();
  }
  return stk;
}

console.log(solution([1, 4, 2, 5, 3]));
