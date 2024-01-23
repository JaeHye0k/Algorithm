const fs = require("fs");
const input = fs.readFileSync("./Javascript/ex.txt").toString().trim().split("\n");
// 원소의 개수와 찾으려는 수 입력받기
const [n, target] = input[0].split(" ").map(Number);
// 모든 원소 입력받기
const array = input[1].split(" ").map(Number);

// 이분 탐색은 배열의 데이터가 정렬되어 있을 경우 O(nlogn)의 시간복잡도로 동작한다.
function binary_search(array, target, start, end) {
    // 종료조건
    if (start > end) return;
    const mid = Math.floor((start + end) / 2);
    if (array[mid] === target) return mid;
    else if (array[mid] > target) return binary_search(array, target, start, mid - 1);
    else return binary_search(array, target, mid + 1, end);
}

const result = binary_search(array, target, 0, n - 1);
if (result) console.log(result + 1);
else console.log("원소가 존재하지 않습니다.");

// 10 7
// 1 3 5 7 9 11 13 15 17 19
