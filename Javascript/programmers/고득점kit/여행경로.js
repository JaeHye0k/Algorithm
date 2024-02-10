function solution(tickets) {
    let answer = [];
    function dfs(from, remainTickets, path) {
        let updatedPath = [...path, from]; // 경로 갱신
        // 남은 티켓이 없다면 answer에 최종 경로 저장
        if (remainTickets.length === 0) {
            answer.push(updatedPath);
        } else {
            remainTickets.forEach(([depart, arrival], i) => {
                // 이전 스탭의 목적지와 현재 스텝의 출발지가 동일하다면 (첫 번째 단계에서는 "ICN"==="ICN")
                if (depart === from) {
                    let to = arrival;
                    let nextRemainTickets = [...remainTickets]; // 남은 티켓 갱신
                    nextRemainTickets.splice(i, 1);
                    dfs(to, nextRemainTickets, updatedPath);
                }
            });
        }
    }
    dfs("ICN", tickets, []);

    return answer.sort()[0]; // 알파벳 순으로 정렬
}
