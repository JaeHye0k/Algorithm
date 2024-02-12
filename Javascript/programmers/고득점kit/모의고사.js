function solution(answers) {
    let first = [1, 2, 3, 4, 5];
    let seconed = [2, 1, 2, 3, 2, 4, 2, 5];
    let third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    let count = [0, 0, 0];
    let answer = [];

    answers.forEach((answer, i) => {
        if (answer === first[i % first.length]) count[0]++;
        if (answer === seconed[i % seconed.length]) count[1]++;
        if (answer === third[i % third.length]) count[2]++;
    });

    let max = Math.max(...count);

    // 최대값이랑 일치하는 사람 asnwer 배열에 추가
    count.forEach((e, i) => {
        if (e === max) answer.push(i + 1);
    });

    return answer;
}
