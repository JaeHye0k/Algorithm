function solution(k, tangerine) {
    const count = {};
    let answer = 0;
    
    for(let i = 0; i < tangerine.length; i++) {
        const species = tangerine[i];
        if(count[species]) {
            count[species]++;
        } else {
            count[species] = 1;
        }
    }
    
    const sortedArr = Object.values(count).sort((a , b) => b - a);
    
    for(const count of sortedArr) {
        answer++;
        k -= count;
        if(k <= 0) break;
        
    }
    
    return answer;
}

/*
    1. 종류별로 개수 파악
    2. 개수를 기준으로 내림차순 정렬
    3. 앞에서부터 카운트 까내려가기
*/