function solution(dartResult) {
    const bonusMap = new Map([
        ['S', 1],
        ['D', 2],
        ['T', 3]
    ]);
    
    let points = []; // 각 라운드 별 받는 점수 
    
    for(let i=0; i<dartResult.length;) {
        let point = 0;
        if(dartResult[i] + dartResult[i+1] === '10') {
            point = 10;
            i += 2;
        } else {
            point = parseInt(dartResult[i]);
            i++;
        }
        const bonus = bonusMap.get(dartResult[i]); 
        points.push(point ** bonus); 
        i++;
        
        if(dartResult[i] === '*') {
            if(i > 0) points[points.length-2] *= 2;
            points[points.length-1] *= 2; 
            i++;
        } else if(dartResult[i] === '#') {
            points[points.length-1] *= -1;
            i++;
        }
    }
    
    return points.reduce((acc, cur) => acc += cur, 0);
}

/*
원래 점수를 전부 모아놓고, 최종적으로 보너스와 옵션 계산 x
-> 이전 점수와, 현재 점수, 누적 점수 기억해놓기
보너스와 옵션을 적용하려면 해당 보너스와 옵션이 어떤 점수에 적용되는지 알아야 함

*/