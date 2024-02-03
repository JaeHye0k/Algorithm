function solution(clothes) {
    let answer = 1;
    let clothType = {};
    clothes.forEach(([name,type])=>{
        // 초기값일 경우(undefined) 0 할당, 아닐 경우 +1 
        clothType[type] = (clothType[type] || 0) + 1
    });
    for(let key in clothType){
        answer *= clothType[key] + 1;
    }
    return answer-1;
}