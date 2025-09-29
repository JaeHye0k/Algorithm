function solution(s) {
    const eng = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    let answer = '';

    while(s.length) {
        for(let i=0; i<eng.length; i++) {
            if(s.startsWith(eng[i])) {
                answer+=i.toString();
                s = s.slice(eng[i].length);
                break;
            } else if(s.startsWith(i.toString())) {
                answer+=i.toString();
                s = s.slice(1);
                break;
            } 
        }
    }

        
    return +answer;
}

/*
    startsWith 사용해서 문자열 제거해나가기

*/