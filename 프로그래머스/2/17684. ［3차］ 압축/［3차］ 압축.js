function solution(msg) {
    var answer = [];
    let lastIdx = 26;
    const dict = Object.fromEntries(Array.from({length: 26}, (e, i) => [String.fromCodePoint(65+i), i+1]));
    
    while(msg.length) {
        const [w, idx] = getW(msg);
        answer.push(idx);
        msg = msg.slice(w.length);
        if(!msg.length) break;
        const c = msg[0];
        const wc = w+c;
        dict[wc] = ++lastIdx;
    }
    
    function getW(str) {
        return Object.entries(dict).reverse().find(([key, value]) => str.startsWith(key));
    }
    
    return answer;
}
    

    
/*
    1. w를 찾는다. (사전에서 현재 입력과 일치하는 가장 긴 문자열)
    2. w에 해당하는 색인 번호를 asnwer에 저장한다.
    3. 입력에서 w를 제거한다 -> 인덱스를 w 다음으로 이동시킨다.
    4. 입력이 남아있다면(인덱스가 msg.length - 1미만이라면)
        1. c = msg[인덱스+1] 
        2. dict[w+c] = lastIdx
*/