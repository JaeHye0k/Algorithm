function solution(s) {
    var answer = [];
    
    const tuple = strToTuple(s);
    tuple.sort((a, b) => a.length - b.length);
    for(const el of tuple) {
        const item = el.find((e) => !answer.includes(e));
        answer.push(item);
    }
    
    return answer;
}

function strToTuple(s) {
    const regex = /\{.+?\}/g;
    s = s.slice(1, s.length-1);
    const arr = s.match(regex);
    
    const tuple = arr.map((str) => str.slice(1, str.length-1).split(',').map(Number));
    
    return tuple;
}

/*
    1. 집합 문자열을 숫자 배열로 추출
    2. 길이가 1인 집합부터 길이가 n인 집합까지 차례대로 한자리씩 맞춰가면 됨
    "{{1,2,3},{2,1},{1,2,4,3},{2}}"
    -> [[2], [2,1], [1,2,3], [1,2,4,3]]
    -> i=1: [2] 
        [2] 는 길이가 1이기 때문에 순서가 바뀔 수 없음 따라서 첫 자리는 2. 따라서 답은 [2,?,?,?]
    -> i=2: [2,1]
        [2,1] 에서 첫 번째 자리가 2인 것이 확실하기 때문에 두 번째 자리는 1. 따라서 답은 [2,1,?,?]
    -> i=3: [1,2,3]
        [1,2,3] 인데, 답은 [2,1,?,?]이기 때문에 3이 안 나왔으므로 세 번째 자리는 3. 따라서 답은 [2,1,3,?]
    -> i=4: [1,2,4,3]
        [1,2,4,3]인데, 답은 [2,1,3,?]이기 때문에 4가 안 나왔으므로 네 번째 자리는 4. 따라서 답은 [2,1,3,4]
    
*/