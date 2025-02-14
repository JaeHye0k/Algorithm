function solution(s) {
    let zeroCount = 0;
    let transformCount = 0;
    while(s !== '1') {
        transformCount++;
        const oneCount = s.length - countZero(s);
        zeroCount += s.length - oneCount;
        s = oneCount.toString(2)
    }
    return [transformCount, zeroCount];
}

function countZero(s) {
    let count = 0;
    for(let i = 0; i < s.length; i++) {
        if(s[i] === '0') count++;
    }
    return count;
}

/*
    1. 0제거 및 제거한 0 개수 카운트
    2. 1의 개수 카운트 (전체 길이 - 0 개수 = 1의 개수)
    3. 1의 개수를 2진수로 변환
    4. '1' 인지 확인
        4-1. '1'이라면 리턴
        4-2. 아니라면 1번으로 돌아가 반복
*/