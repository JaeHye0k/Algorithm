function solution(cards1, cards2, goal) {
    var answer = '';
    for(let i=0; i<goal.length; i++) {
        const str = goal[i];
        if(isAble(str, cards1)) continue;
        if(isAble(str, cards2)) continue;
        return "No";
    }
    
    return "Yes";
}

function isAble(str, arr) {
    if(arr[0] === str) {
        arr.shift();
        return true;
    }
    return false;
}

/*
1. goal에 있는 문자열을 전부 순회하며 첫 번째 요소에 해당 문자열이 있는지 확인 

*/