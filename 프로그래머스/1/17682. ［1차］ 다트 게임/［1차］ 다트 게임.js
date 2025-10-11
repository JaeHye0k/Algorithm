function solution(dartResult) {
    const bonusMap = new Map([
        ['S', 1],
        ['D', 2],
        ['T', 3]
    ]);
    
    const optionMap = new Map([
        ['*', 2],
        ['#', -1],
        [undefined, 1]
    ]);
    
    const darts = dartResult.match(/\d.?\D/g);
    
    let points = []; // 각 라운드 별 받는 점수 
    
    for(let i=0; i<darts.length; i++) {
        
        const parts = darts[i].match(/(^\d+)(S|D|T)(\*|#)?/).slice(1);
        const point = parseInt(parts[0]);
        const bonus = bonusMap.get(parts[1]); 
        points.push(point ** bonus); 
        
        const option = parts[2];
        if(option === '*') {
            if(i > 0) points[points.length-2] *= optionMap.get(option);
            points[points.length-1] *= optionMap.get(option); 
        } else {
            points[points.length-1] *= optionMap.get(option)
        }
    }
    
    return points.reduce((acc, cur) => acc += cur, 0);
}

/*
원래 점수를 전부 모아놓고, 최종적으로 보너스와 옵션 계산 x
-> 이전 점수와, 현재 점수, 누적 점수 기억해놓기
보너스와 옵션을 적용하려면 해당 보너스와 옵션이 어떤 점수에 적용되는지 알아야 함

*/