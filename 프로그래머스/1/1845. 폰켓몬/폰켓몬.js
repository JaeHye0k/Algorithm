function solution(nums) {
    const max = nums.length / 2;
    const set = new Set(nums);
    return set.size > max ? max : set.size;
}

/*
    nums.length / 2 = 가질 수 있는 포켓몬 수

*/