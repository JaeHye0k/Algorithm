function solution(topping) {
    let answer = 0;
    const a = {};
    const b = topping.reduce((acc, cur) => {
        if(acc[cur]) acc[cur]++;
        else acc[cur] = 1;
        return acc;
    }, {});
    let aCount = 0;
    let bCount = Object.keys(b).length;
    
    for(let i=0; i<topping.length; i++) {
        const t = topping[i];
        
        b[t]--;
        if(b[t] === 0) bCount--;
        if(a[t] === undefined) {
            a[t] = 1;
            aCount++;
        } 
        
        if(aCount === bCount) answer++;
    }
    return answer;
}

/*
    공평하게 나눠지는 조건: 동일한 가짓수의 토핑으로 나눠졌을 경우 (토핑의 양은 상관 없음)
    공평하게 자르는 방법의 수 찾기
    
    일일이 자른 뒤 확인
    [1][2,3,1,4] = (1),(2,3,1,4)
    [1,2][3,1,4] = (1,2),(3,1,4)
    [1,2,3][1,4] = (1,2,3),(1,4)
    [1,2,3,1][4] = (1,2,3),(4)
    
    O(nlogn) 내로 풀어야 함
    일일이 자를 때마다 topping 을 전부 도는 것은 비효율적.
    자를 때마다 각 구역별 어떤 종류가 몇 개 있는지 누적해놓고, 그 다음 자를 때(한 칸 이동해서 자를 때) 변경사항만 수정해주면 됨
    [1,2,1,3,1,4,1,2] = a:{} b:{1:4, 2:2, 3:1, 4:1}
    [1][2,1,3,1,4,1,2] = a:{1:1} b:{1:3, 2:2, 3:1, 4:1} // a그룹에 1이 추가되었으므로 b그룹에서 1의 개수를 1 차감함 -> 1:4 (불공평)
    [1,2][1,3,1,4,1,2] = {1:1, 2:1}, {1:3, 2:1, 3:1, 4:1} // a그룹에 2가 추가되었으므로 b그룹에서 2의 개수를 1 차감함 -> 2:4(불공평)
    [1,2,1][3,1,4,1,2] = {1:2, 2:1}, {1:2, 2:1, 3:1, 4:1} // a그룹에 1이 추가되었으므로 b그룹에서 1의 개수를 1 차감함 -> 2:4(불공평)
    [1,2,1,3][1,4,1,2] = {1:2, 2:1, 3:1}, {1:2, 2:1, 4:1} // a그룹에 3이 추가되었으므로 b그룹에서 3의 개수를 1 차감함 -> 3:3(공평)
    
*/

/*
* 시간초과 O(n^2)
function solution(topping) {
    var answer = 0;
    for(let i=1; i<topping.length; i++) {
        const a = new Set(topping.slice(0,i));
        const b = new Set(topping.slice(i));
        answer += a.size === b.size ? 1 : 0;
    }
    return answer;
}
*/