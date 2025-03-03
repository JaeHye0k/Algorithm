function solution(want, number, discount) {
    let answer = 0;
    const itemMap = {};
    
    for(let i = 0; i < want.length; i++) {
        itemMap[want[i]] = number[i];
    } 
    
    const totalNumber = number.reduce((acc, cur) => acc + cur, 0);

    for(let i = 0; i <= discount.length - totalNumber; i++) {
        const copyItemMap = { ...itemMap };
        
        for(let j = i; j < i + totalNumber; j++) {
            const item = discount[j];
            const itemCount = copyItemMap[item];
            if(!itemCount) break;
            copyItemMap[item] = itemCount - 1;
        }
        
        answer += Object.values(copyItemMap).every((e) => e === 0) ? 1 : 0;
    }
    
    return answer;
}


/*
    want - number 꼴의 Map 자료구조 생성
    i = 0 ~ discount.length - number의 원소의 합
    j = i ~ number 의 원소의 합

*/