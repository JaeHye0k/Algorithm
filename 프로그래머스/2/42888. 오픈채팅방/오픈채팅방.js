function solution(record) {
    const messages = [];
    const users = {};
    
    for(let i=0; i<record.length; i++) {
        const [action, userId, nickname] = record[i].split(' ');
        
        if(action === "Enter" || action === "Change") {
            users[userId] = nickname;
        }
    }
    
    for(let i=0; i<record.length; i++) {
        const [action, userId, nickname] = record[i].split(' ');
        
        if(action === "Enter") {
            messages.push(users[userId] + '님이 들어왔습니다.');
        } else if(action === "Leave") {
            messages.push(users[userId] + '님이 나갔습니다.');
        }
    }
    
    return messages;
}



/*

52분
    users = Map{ [userId]: nickname } // 유저id 와 대응하는 닉네임 저장
    messages = []; // 메시지가 저장될 배열 (닉네임 대신 userId가 표시됨)
    
    actionMap = Map{ [action]: message } // 행동에 대응하는 함수 저장
        Enter: (action, userId) => messages.push("${userId} 님이 들어왔습니다.");
        Leave: (action, userId) => messages.push("${userId} 님이 나갔습니다.");
        Change: (userId, nickname) => users.set(user.get(userId), nickname);
    
    
    // record를 action, userId, nickname으로 분리하는 함수
    
    // messages에 있는 userId를 nickname으로 변환하는 함수 (마지막에 실행)
    
    0. actionMap 정의
    1. record를 순회
    2. users 세팅, messages 추가
    3. 
*/