// 한 팀은 6명, 상위 4명의 점수를 합하여 계산
// 결승점을 통과한 순서대로 점수 부여
// 가장 낮은 점수를 얻는 팀이 우승
// 6명의 주자가 참가하지 못한 팀은 점수 계산에 포함하지 않는다.
// 동점인 경우 다섯 번째 주자가 가장 빨리 들어온 팀이 우승
// 적어도 한 팀은 우승한다. 모든 선수는 등수가 존재한다.

const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const T = +input.shift();
for (let i = 0; i < T; i++) {
    const N = +input[i * 2];
    const players = input[i * 2 + 1].split(' ').map(Number);
    solution(N, players);
}

function solution(N, players) {
    // 팀 종류
    let teams = new Set(players);
    // 팀별 주자 수
    let teamObj = {};
    [...teams].forEach((e) => (teamObj[e] = 0));
    // 팀별 주자 수 구하기
    players.forEach((e) => (teamObj[e] += 1));

    // 주자가 6명이 안되는 팀은 제외하기
    players = players.filter((e) => teamObj[e] >= 6);
    teams = new Set(players);
    teamObj = {};
    [...teams].forEach((e) => (teamObj[e] = []));
    // 팀별 점수
    players.forEach((e, i) => {
        if (teamObj[e].length < 5) {
            teamObj[e].push(i + 1);
        }
    });
    const scoreObj = {};
    for (let i in teamObj) {
        const scoreToFour = teamObj[i].slice(0, 4).reduce((acc, cur) => (acc += cur), 0);
        const scoreToFive = teamObj[i].slice(0, 5).reduce((acc, cur) => (acc += cur), 0);
        scoreObj[i] = [scoreToFour, scoreToFive];
    }
    const scoreArr = Object.entries(scoreObj);
    let score = scoreArr[0][1]; // 점수 합
    let answer = scoreArr[0][0]; // 팀 번호
    for (let i = 1; i < scoreArr.length; i++) {
        if (score[0] > scoreArr[i][1][0]) {
            score = scoreArr[i][1];
            answer = scoreArr[i][0];
        } else if (score[0] === scoreArr[i][1][0]) {
            score = score[1] < scoreArr[i][1][1] ? score : scoreArr[i][1];
            answer = score[1] < scoreArr[i][1][1] ? answer : scoreArr[i][0];
        }
    }

    console.log(answer);
}
