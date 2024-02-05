function solution(answers) {
    let first = [1, 2, 3, 4, 5];
    let seconde = [2, 1, 2, 3, 2, 4, 2, 5];
    let third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    let count1 = answers.filter((e, i) => e === first[i % first.length]).length;
    let count2 = answers.filter((e, i) => e === seconde[i % seconde.length]).length;
    let count3 = answers.filter((e, i) => e === third[i % third.length]).length;

    let maxValue = Math.max(count1, count2, count3);

    let answer = [];
    if (count1 === maxValue) answer.push(1);
    if (count2 === maxValue) answer.push(2);
    if (count3 === maxValue) answer.push(3);

    return answer.sort((a, b) => a - b);
}
