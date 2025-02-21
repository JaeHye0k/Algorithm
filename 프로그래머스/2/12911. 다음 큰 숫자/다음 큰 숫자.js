function solution(n) {
    const nOneCount = n.toString(2).replaceAll('0', '').length;
    let i = n + 1;
    while(true) {
        const iOneCount = i.toString(2).replaceAll('0', '').length;
        if(nOneCount === iOneCount) break;
        i++;
    }
    return i;
}

/*
    n보다 큰 자연수 중, 2진수로 변환했을 때 1의 개수가 같은 수.
    
    1. i를 n+1부터 1씩 증가시키며 2진수로 변환하여 1의 개수를 비교하는 방법
    
*/