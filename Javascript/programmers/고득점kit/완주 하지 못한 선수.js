function solution(participant, completion) {
    let map1 = new Map();
    participant.forEach(e=>{
        if(map1.has(e)) map1.set(e, map1.get(e)+1);
        else map1.set(e, 1);
    })
    completion.forEach(e=>{
        map1.set(e,map1.get(e)-1);
    })
    let answer = [...map1.entries()].filter(([key,value])=>value !== 0);
    answer = answer[0][0];
    return answer;
}