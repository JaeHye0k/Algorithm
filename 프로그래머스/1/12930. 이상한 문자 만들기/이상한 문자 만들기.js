function solution(s) {
    const arr = s.split(' ');
    return arr.map((s) => {
        let newString = '';
        for(let i=0; i<s.length; i++) {
            if(i % 2) newString += s[i].toLowerCase();
            else newString += s[i].toUpperCase();
        }
        return newString;
    }).join(' ');
}

/*
    공백으로 분리
*/