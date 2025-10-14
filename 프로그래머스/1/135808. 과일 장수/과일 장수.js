function solution(k, m, score) {
    var answer = 0;
    score.sort((a, b) => b - a);
    const boxes = [];
    
    for(let i=m-1; i<score.length; i+=m) {
        boxes.push(score[i]); 
    }
    
    return boxes.reduce((acc, cur) => {
        return acc += cur * m;
    }, 0)
}

/*
    각 상자의 저점이 높아야 함
    상자의 개수 = Math.floor(score.length / m);
    오름차순으로 정렬해서 첫 번째 사과부터 상자의 개수만큼 끼워팔기
    4,4,4,4,4,4,2,2,2,2,1,1
*/