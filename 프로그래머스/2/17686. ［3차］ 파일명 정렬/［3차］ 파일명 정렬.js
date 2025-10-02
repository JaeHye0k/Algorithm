function solution(files) {
    files = files.map(file => file.match(/([^\d]+)(\d{1,5})(.*)/).slice(1));
    files.sort(sortCb);
    return files.map(file => file.join(''));
}

// 배열을 정렬 기준에 맞게 정렬 a, b: [HEAD, NUMBER, TAIL][]
function sortCb(a, b) {
    const head1 = a[0].toLowerCase();
    const head2 = b[0].toLowerCase();
    if(head1 !== head2) {
        return head1.localeCompare(head2);
    }
    const number1 = Number(a[1]);
    const number2 = Number(b[1]);
    if(number1 !== number2) {
        return number1 - number2;
    }
    return 0;
}

/*
포함될 수 있는 문자열 = 대소문자, 숫자, 공백, 마침표, 빼기 부호

HEAD = 숫자가 아닌 문자열 = 대소문자, 공백, 마침표, 빼기 (required)
NUMBER = 최대 5글자의 숫자 = 0 ~ 99999, 앞에 0이 붙을 수 있음 (required)
TAIL = 그 외의 나머지 부분 (optional = '')

HEAD와 NUMBER 를 구분하는 법:
1. 가장 처음 등장하는 숫자 바로 앞에서 자르기 (앞: HEAD, 뒤: NUMBER)
2. 숫자 바로 뒤에서 자르기, 숫자가 5글자를 넘을 경우 5글자뒤에서 자르기 (앞: NUMBER, 뒤: TAIL)

정렬 방법:
HEAD = 대소문자를 구분하지 않는 사전 순
HEAD가 대소문자 차이 외에 같다면,
NUMBER = 앞에 있는 0이 무시된 숫자 오름차순
NUMBER의 0이 무시된 숫자 값이 같다면,
원래 입력 순서 그대로 냅두기
*/