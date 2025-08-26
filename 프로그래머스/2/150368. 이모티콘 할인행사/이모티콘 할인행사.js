function solution(users, emoticons) {
    var answer = [0, 0];
    const cases = [];
    
    function fillCases(depth, discounts) {
        if(depth >= emoticons.length) {
            cases.push(discounts);
            return;
        }
        
        const arr = [10, 20, 30, 40];
        
        for(const percent of arr) {
            fillCases(depth+1, [...discounts, percent]);
        }
    }
    
    fillCases(0, []);

    for(let i=0; i<cases.length; i++) { []
        let total = 0;
        let count = 0;
        for(let j=0; j<users.length; j++) {
            let [rate, money] = users[j]; 
            let userCost = 0;
            
            for(let k=0; k<cases[i].length; k++) { 
                if(cases[i][k] < rate) continue; 
                const cost = getCost(emoticons[k], cases[i][k]); 
                userCost += cost;
            }
            
            if(userCost >= money) count++;
            else total += userCost;
        }
        
        if(count > answer[0] || (count >= answer[0] && total > answer[1])) {
            answer = [count, total];
        }
    }
    
    return answer;
}

function getCost(price, percent) {
    return price - price * percent / 100; 
}