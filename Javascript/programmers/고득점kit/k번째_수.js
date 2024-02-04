function solution(array, commands) {
    return commands.map(([i,j,k])=>{
        return array.slice(i-1,j).sort((a,b)=>a-b).at(k-1);
    });
}

// sort함수의 매개변수를 전달하지 않을 경우 문자열 기준으로 정렬됨.
// [1,10,101,61,45].sort()  => [1, 10, 101, 45, 61]
// [1,10,101,61,45].sort((a,b)=>a-b)  => [1, 10, 45, 61, 101]