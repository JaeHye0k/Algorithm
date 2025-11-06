function solution(x) {
    const sum = x.toString().split('').map(Number).reduce((acc, cur) => acc + cur, 0);
    return x % sum === 0;
}

/*
x 를 자릿수로 구분
각 자릿수 더하기
x로 나누어떨어지는지 확인
*/