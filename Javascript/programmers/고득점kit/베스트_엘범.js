function solution(genres, plays) {
    let answer = [];
    let obj = {};
    let sumObj = {};
    genres.forEach((genre,i)=>{
        if(obj[genre] === undefined) {
            obj[genre] = [];
            sumObj[genre] = 0;
        };
        obj[genre].push([i,plays[i]]);
        sumObj[genre] += plays[i];
    });
    let sortArr = [...Object.entries(sumObj).sort((a,b)=>b[1]-a[1])];
    for(let [genre,play] of sortArr){
        obj[genre].sort((a,b)=>b[1]-a[1]);
        answer.push(obj[genre][0][0]);
        if(obj[genre].length > 1) answer.push(obj[genre][1][0]);
    }
    return answer;
}