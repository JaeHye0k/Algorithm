function solution(number) {
    var answer = 0;
    const visited = new Array(number.length).fill(0);
    
    answer = permutation(0, 0, 0);
    
    function permutation(idx, depth, sum) {
        if(depth === 3 && sum === 0) return 1;
        if(depth >= 3 || idx >= number.length) return 0;
        let count = 0;
        for(let i=idx; i<number.length; i++) {
            if(visited[i]) continue;
            visited[i] = true;
            count += permutation(i+1, depth+1, sum + number[i]);
            visited[i] = false;
        }
        return count;
    }
    
    return answer;
}


/*
    

*/