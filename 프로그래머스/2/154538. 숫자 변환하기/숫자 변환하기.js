function solution(x, y, n) {
    const arr = new Array(y+1).fill(Infinity);
    arr[x] = 0;
    
    for(let i=x; i<y; i++) {
        if(i * 3 <= y) arr[i*3] = Math.min(arr[i*3], arr[i] + 1);
        if(i * 2 <= y) arr[i*2] = Math.min(arr[i*2], arr[i] + 1);
        if(i + n <= y) arr[i+n] = Math.min(arr[i+n], arr[i] + 1);
    }
    
    return arr[y] === Infinity ? -1 : arr[y];
}

