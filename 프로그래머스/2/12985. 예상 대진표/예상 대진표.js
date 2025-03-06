function solution(n,a,b) {
    let round = 1;
    
    while(2 ** round < n) {
        if(isEven(a) && b === a - 1) break;
        if(isEven(b) && a === b - 1) break;
        
        a = Math.ceil(a / 2);
        b = Math.ceil(b / 2);
        round++;
    }

    

    return round;
}


function isEven(num) {
    return num % 2 === 0;
}