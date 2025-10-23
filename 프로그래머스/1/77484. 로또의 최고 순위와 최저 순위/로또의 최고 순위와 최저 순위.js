function solution(lottos, win_nums) {
    var answer = [];
    let match = 0;
    let zero = 0;
    const rank = new Map([
        [6, 1],
        [5, 2],
        [4, 3],
        [3, 4],
        [2, 5],
    ])
    
    for(const lotto of lottos) {
        if(lotto === 0) {
            zero++;
            continue;
        } 
        if(win_nums.includes(lotto)) {
            match++;
        }
    }
    
    answer[0] = rank.has(match+zero) ? rank.get(match+zero) : 6;
    answer[1] = rank.has(match) ? rank.get(match) : 6;
    
    return answer;
}

/*
lottos의 원소가 win_nums에 포함되어있는지 확인 -> 있다면 맞춘개수 + 1
0의 개수 저장 -> 0은 어떤 수로든 바꿀 수 있음

*/