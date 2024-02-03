function solution(nums) {
    var answer = 0;
    const poke = new Map();
    nums.forEach(e=>{
        if(poke.has(e)) poke.set(e, poke.get(e)+1);
        else poke.set(e,1);   
    });
    //poke를 value를 기준으로 오름차순으로 정렬
    let pokeSort = new Map([...poke.entries()].sort((a,b)=>a[1]-b[1]));
    answer = [...pokeSort].length < nums.length/2 ? [...pokeSort].length : nums.length/2;
    return answer;
}