function solution(babbling) {
    var answer = 0;
    const BABBLING = ["aya", "ye", "woo", "ma"];
    
    for(let i=0; i<babbling.length; i++) {
        let babble = babbling[i];
        for(let j=0; j<BABBLING.length; j++) {
            if(babble.includes(BABBLING[j].repeat(2))) break;
            
            babble = babble.split(BABBLING[j]).join(" ");
        } 
        if(babble.trim().length === 0) answer++;
    }
    
    return answer;
}

/*
1. babbling[i]가 "aya"/"ye"/"woo"/"ma"로 시작하는지 확인
2. 그렇다면 해당 발음의 인덱스를 방문처리 (예: "aya"로 시작한다면 0번 인덱스 방문처리)
3. 방문한 발음의 글자수만큼 babbling[i]의 앞에서 제거
4. 1번 로직을 수행하는데, 2번 로직에서 방문한 인덱스는 제외하고 검사

[a, b, c, d] 가 있고, 연속으로 동일 인덱스 방문 불가.

*/