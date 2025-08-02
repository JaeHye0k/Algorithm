function solution(land) {
    for(let i=1; i<land.length; i++) {
        const curRow = land[i];
        const prevRow = land[i-1];
        const prevMax = Math.max(...prevRow);
        const prevMaxIdx = prevRow.indexOf(prevMax);
        for(let j=0; j<4; j++) {
            if(prevMaxIdx === j) {
                const prevSecondMax = Math.max(...prevRow.filter((e, i) => i !== prevMaxIdx));
                curRow[j] += prevSecondMax;
            } else {
                curRow[j] += prevMax;
            }
        }
    }
    
    return Math.max(...land[land.length-1]);
}

/*
  참고자료: https://han-joon-hyeok.github.io/posts/programmers-hopscotch/  
*/