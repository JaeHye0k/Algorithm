function solution(nums) {
    return combinate(nums, 0, 0, 0);
}

function combinate(nums, cur, depth, sum) {
    if(depth === 3) {
        return isPrimeNumber(sum) ? 1 : 0;
    };
    
    let count = 0;
    
    for(let i = cur; i<nums.length; i++) {
        count += combinate(nums, i+1, depth+1, sum + nums[i]);        
    }
    
    return count;
}

function isPrimeNumber(n) {
    for(let i=2; i<=Math.sqrt(n); i++) {
        if(n % i === 0) return false;
    }
    return true;
}

/*
50C3 = 50*49*48 / 3! 
일일히 구해볼만 함

소수인지 판별
어떤 수 n이 소수인지 판별하려면, 2부터 log(n)까지 1씩 증가하며 약수를 구해보면 됨. 그 사이에 약수가 존재하면 소수가 아님

*/