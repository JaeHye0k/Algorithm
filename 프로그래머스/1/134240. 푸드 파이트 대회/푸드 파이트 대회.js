function solution(food) {
    var answer = '';
    food.forEach((e, i) => {
        if(i === 0) return;
        answer += i.toString().repeat(Math.floor(e/2));
    });
    return answer + 0 + [...answer].reverse().join('');
}

/*
    food[0] = 물
    A와 B가 먹는 음식의 수가 같아야 하므로 배열에 삽입할 때 한 번에 두 개씩 삽입해야 함 = 각 원소를 시작부터 짝수로 만들자
    
*/