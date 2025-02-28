function solution(n, words) {
    const appear = new Set();
    
    for(let i = 0; i < words.length; i++) {
        const isAleadyAppear = appear.has(words[i]);
        const isValidCharacter = i > 0 ? words[i - 1].at(-1) === words[i][0] : true;
        if(isAleadyAppear || !isValidCharacter) {
            const num = i % n + 1;
            const turn = Math.floor(i / n) + 1;
            return [num, turn];
        }
        
        appear.add(words[i]);
    }
    
    return [0, 0];
}


/*
    1. 배열을 순회하며 각각의 단어를 Set 자료구조에 저장
    2. 이미 Set 에 저장되어있는 단어인지 확인 (이미 말한 단어인지 확인)
        2-1. 저장되어있다면 [번호, 차례] 리턴
    3. 현재 단어의 맨 앞 글자가 이전 단어의 맨 뒷 글자와 일치하는지 확인
    4. 끝까지 순회했다면 [0,0] 리턴
*/