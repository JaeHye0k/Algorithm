function solution(str1, str2) {
    var answer = 0;
    const a = set(chunknize(str1)); 
    const b = set(chunknize(str2));
    const i = intersection(a, b);
    const u = union(a, b);
    const iSize = [...i.values()].reduce((acc, cur) => acc += cur, 0);
    const uSize = [...u.values()].reduce((acc, cur) => acc += cur, 0);
    if(iSize === 0 && uSize === 0) {
        answer = 65536;  
    } else {
        const c = iSize / uSize;
        answer = Math.floor(c * 65536);
    }
    
    return answer;
}

function chunknize(str) {
    const arr = [];
    for(let i=0; i<str.length-1; i++) {
        arr.push(str[i]+str[i+1]);
    }
    return arr;
}

function set(arr) {
    const pattern = /[a-zA-Z][a-zA-Z]/;
    const obj = arr.reduce((acc, cur) => {
        if(!pattern.test(cur)) return acc;
        cur = cur.toLowerCase();
        if(acc.has(cur)) acc.set(cur, acc.get(cur) + 1);
        else acc.set(cur, 1);
        return acc;
    }, new Map());
    return obj;
}

function intersection(a, b) {
    const obj = new Map();
    for(const [key, val] of a) {
        if(b.has(key)) {
            obj.set(key, Math.min(val, b.get(key)));
        }
    }
    return obj;
}

function union(a, b) {
    const obj = new Map();
    for(const [key, val] of a) {
        if(obj.has(key)) {
            obj.set(key, Math.max(val, obj.get(key)));
        } else {
            obj.set(key, val);
        }
    }
    
    for(const [key, val] of b) {
        if(obj.has(key)) {
            obj.set(key, Math.max(val, obj.get(key)));
        } else {
            obj.set(key, val);
        }
    }
    return obj;
}

/*
1. 각각의 문자열을 두 글자씩 쌍을 지어서 집합 만들기 O(N)
2. 집합에서 공백, 숫자, 특수 문자가 포함된 요소 제거하기 O(N)
3. 두 집합 교집합 하기 (다중집합에 대한 예외처리 하기) 
4. 두 집합 합집합 하기 (다중집합에 대한 예외처리 하기)
5. 자카드 유사도 = 교집합 크기 / 합집합 크기 
6. 정답 = Math.floor(자카드 유사도 * 65536)

다중집합에 대해 처리하려면 각 집합에서 어떤 원소가 몇 개 있는지에 대한 정보가 필요함
{ 원소: 개수 }
*/