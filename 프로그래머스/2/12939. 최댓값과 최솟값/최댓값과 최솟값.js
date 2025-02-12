function solution(s) {
    let min = Infinity;
    let max = -Infinity;
    const sArr = s.split(' ');
    for(const strNum of sArr) {
        const num = Number(strNum);
        if(min > num) min = num;
        if(max < num) max = num;
    }
    
    return `${min} ${max}`;
}

/*
1. s를 공백을 기준으로 split
2. 배열 순회하며 최댓값, 최솟값 저장
*/