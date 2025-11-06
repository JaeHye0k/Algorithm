function solution(x) {
    let sum = 0;
    let temp = x;
    while(temp > 0) {
        sum += temp % 10;
        temp = Math.floor(temp / 10);
    }
    return x % sum === 0; 
}

/*
x 를 자릿수로 구분
각 자릿수 더하기
x로 나누어떨어지는지 확인
*/