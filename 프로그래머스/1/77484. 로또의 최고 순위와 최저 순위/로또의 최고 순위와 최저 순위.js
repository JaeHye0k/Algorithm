function solution(lottos, win_nums) {
    const rank = [6, 6, 5, 4, 3, 2, 1];

    const match = lottos.filter((lotto) => win_nums.includes(lotto)).length;
    const zero = lottos.filter((lotto) => lotto === 0).length;   
    
    return [rank[match + zero], rank[match]];
}

/*
lottos의 원소가 win_nums에 포함되어있는지 확인 -> 있다면 맞춘개수 + 1
0의 개수 저장 -> 0은 어떤 수로든 바꿀 수 있음

*/