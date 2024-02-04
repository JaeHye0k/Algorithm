function solution(nums) {
    let len = nums.length/2;
    let poke = new Set(nums).size;
    return poke < len ? poke : len;
}