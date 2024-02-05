// function solution(participant, completion) {
//     let map1 = new Map();
//     participant.forEach(e=>{
//         map1.set(e,map1.get(e)+1||1);
//     })
//     completion.forEach(e=>{
//         map1.set(e,map1.get(e)-1);
//     })
//     let answer = [...map1.entries()].filter(([key,value])=>value !== 0);
//     answer = answer[0][0];
//     return answer;
// }

function solution(participant, completion) {
    let obj = {};
    let answer = "";
    participant.forEach((e) => {
        obj[e] = obj[e] + 1 || 1;
    });
    completion.forEach((e) => {
        obj[e] = obj[e] - 1;
    });
    for (let e in obj) {
        if (obj[e] === 1) answer = e;
    }
    return answer;
}

// 정확성: 58.3, 호율성: 41.7
