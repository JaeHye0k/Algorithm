const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim();

const answer = [];
const divTags = input.match(/<div(.*?)>(.*?)<\/div>/g);

for (let div of divTags) {
    const pTags = div.split(/<p(.*?)>(.*?)<\/p>/g);
    const title = getTitle(pTags[0]); // div 태그의 title 구하기

    const result = [];
    for (let i = 1; i < pTags.length - 1; i++) {
        let p = pTags[i].trim();
        if (!p.length) continue; // p가 공백일 경우
        p = deleteTags(p);
        result.push(p);
    }
    answer.push([`title : ${title}`, result.join('\n')]);
}

console.log(answer.map((v) => v.join('\n')).join('\n'));

function getTitle(str) {
    let isTitle = false;
    let result = '';
    for (let x of str) {
        if (x !== '"' && isTitle) result += x; // 쌍 따옴표를 제외한 타이틀명 구하기
        if (x === '"' && !isTitle) {
            isTitle = true; // 타이틀 시작하는 부분 체크
        } else if (x === '"' && isTitle) {
            isTitle = false; // 타이틀 끝나는 부분 체크
            break;
        }
    }
    return result;
}

function deleteTags(p) {
    let str = '';
    let prev = '';
    let isTag = false;
    for (let i = 0; i < p.length; i++) {
        if (p[i] === '<' && !isTag) {
            isTag = true; // 태그 시작 부분을 만났을 때
            continue;
        } else if (p[i] === '>' && isTag) {
            isTag = false; // 태그 끝 부분을 만났을 때
            continue;
        } else if (!isTag) {
            if (prev === ' ' && prev === p[i]) continue; // 공백이 두 칸일 경우 (이전 칸, 현재 칸)
            str += p[i];
            prev = p[i];
        }
    }
    return str;
}
