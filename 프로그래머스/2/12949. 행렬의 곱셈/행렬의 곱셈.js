function solution(arr1, arr2) {
    const answer = Array.from({length: arr1.length}, () => Array(arr2[0].length).fill(0));
    const n = arr2.length;
    for(let i=0; i<arr1.length; i++) {
        for(let j=0; j<arr2[0].length; j++) {
            for(let k=0; k<n; k++) {
                answer[i][j] += arr1[i][k] * arr2[k][j]
            }
        }
    }
    return answer;
}

/*
 N = arr1의 열의 수 || arr2의 행의 수
 

*/