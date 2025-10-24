function solution(s, skip, index) {
    var answer = '';
    const a = 'a'.codePointAt(0);
    const z = 'z'.codePointAt(0);
    const skips = skip.split('').map(e => e.codePointAt(0));
    
    for(let i=0; i<s.length; i++) {
        const cur = s[i].codePointAt(0);
        let next = cur + index;
        const skipped = skips.filter(skip => skip >= cur && skip <= next).length;
        next += skipped;
        if(next > z) next = next % z + a - 1;
        answer += String.fromCodePoint(next);
    }
    
    return answer;
}

/*
    s[i] = s[i] + index 
    그 사이에 skip에 포함된 문자가 있다면 index++
    z를 넘어가면 a로
    
    z를 넘어갈 경우 z로 나눈 나머지 + a - 1
    
*/