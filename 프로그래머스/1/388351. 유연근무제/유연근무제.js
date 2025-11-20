function solution(schedules, timelogs, startday) {
    var answer = 0;
    for(let i=0; i<schedules.length; i++) {
        const schedule = toMinute(schedules[i]);
        let pass = 0;
        for(let j=0; j<7; j++) {
            const time = toMinute(timelogs[i][j]);
            if(time - schedule <= 10 || isWeekend(j, startday)) pass += 1;
        }
        if(pass === 7) answer += 1;
    }
    return answer;
}

function isWeekend(day, startday) {
    // startDay = 0부터 시작하도록 설정
    startday -= 1;
    const isSaturday = (day + startday) % 7 === 5;
    const isSunday = (day + startday) % 7 === 6; 
    return isSaturday || isSunday;
}

function toMinute(time) {
    const hour = Math.floor(time / 100);
    const minute = time % 100;
    return hour * 60 + minute;
}

/*
    주말 출근 시각은 이벤트에 영향 X
    i번째 직원의 schedules[i]와 timelogs[i]를 비교
    
    단순히 10이상 차이날 경우 지각으로 처리한다면 659와 700이 지각처리됨
    -> 따라서 시간을 분으로 환산한 뒤 비교 (100으로 나눈 몫(시간)을 60으로 곱해서 분으로 환산한 뒤 나머지에 더하기)
    
    
    x가 주말인지 판별하는 기능 필요
    isWeekend(x, startday)
    
*/