function solution(answers) {
    let first = [1, 2, 3, 4, 5];
    let seconde = [2, 1, 2, 3, 2, 4, 2, 5];
    let third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let count = [0, 0, 0];
    answers.forEach((e, i) => {
        if (e === first[i % first.length]) count[0]++;
        if (e === seconde[i % seconde.length]) count[1]++;
        if (e === third[i % third.length]) count[2]++;
    });
    let answer = [];
    let maxValue = Math.max(...count);
    count.forEach((e, i) => {
        if (maxValue === e) answer.push(i + 1);
    });
    return answer;
}
