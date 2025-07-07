function solution(cacheSize, cities) {
    cities = cities.map((city) => city.toLowerCase());
    let cache = [];
    let answer = 0;
    for(let i=0; i<cities.length; i++) {
        const idx = checkCache(cache, cities[i]);
        if(idx === -1) {
            answer += 5;
            cache.push(cities[i]);
            LRU(cache, cacheSize);
        } else{
            answer += 1;
            cache.splice(idx, 1);
            cache.push(cities[i]);
        }
        
    }
    return answer;
}

// cache hit, miss 판단
function checkCache(cache, data) {
    for(let i=0; i<cache.length; i++) {
        if(data === cache[i]) return i; // Hit!
    }
    return -1; // Miss
}

function LRU(cache, size) {
    if(cache.length > size) {
        cache.shift();
    }
    return cache;
}

/*
- 캐시에 없다면 실행시간+5, 캐시에 push
- 캐시에 있다면 실행시간+1, 캐시에 push
- 캐시의 마지막 인덱스가 가장 최신에 사용한 데이터
- cache hit 일 경우 
*/