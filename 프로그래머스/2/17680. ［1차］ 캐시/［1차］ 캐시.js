function solution(cacheSize, cities) {
    const cache = [];
    let answer = 0;
    
    cities = cities.map((city) => city.toLowerCase());
    
    for(let i=0; i<cities.length; i++) {
        const idx = cache.indexOf(cities[i]);
        if(idx === -1) {
            answer += 5;
        } else{
            answer += 1;
            cache.splice(idx, 1);
        }
        cache.push(cities[i]);
        if(cache.length > cacheSize) cache.shift();
        
    }
    return answer;
}


/*
- 캐시에 없다면 실행시간+5, 캐시에 push
- 캐시에 있다면 실행시간+1, 캐시에 push
- 캐시의 마지막 인덱스가 가장 최신에 사용한 데이터
*/