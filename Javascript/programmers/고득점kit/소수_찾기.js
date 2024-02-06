function solution(numbers) {
    let len = numbers.length;
    let answer = [...getPer()].filter((v) => isPrime(v)).length;

    // 1. 만들 수 있는 모든 순열 찾기
    function getPer() {
        let visited = Array(len).fill(false);
        let permutations = [];
        function dfs(cur) {
            permutations.push(Number(cur));
            for (let i = 0; i < len; i++) {
                if (!visited[i]) {
                    visited[i] = true;
                    dfs(cur + numbers[i]);
                    visited[i] = false;
                }
            }
        }
        dfs("0");
        permutations.shift(); // 처음에 삽입해준 0 제거
        return new Set(permutations); // 중복된 순열 제거
    }
    // 2. 소수 판별하기
    function isPrime(num) {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }
    return answer;
}

// check 배열 = 각각의 자릿수에 대한 방문 정보 담은 배열
// check[1] = str[1]
