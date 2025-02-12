const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim();

const answer = [];
const divTags = input.match(/<div(.*?)>(.*?)<\/div>/g);

for (let div of divTags) {
    const title = 'title : ' + div.match(/<div title="(.*?)">/)[1].trim();
    answer.push(title);
    const pTags = div.match(/<p>(.*?)<\/p>/g);
    for (let p of pTags) {
        let paragraph = p.replace(/<[^>]*>/g, '');
        paragraph = paragraph.trim();
        paragraph = paragraph.replace(/\s+/g, ' ');
        paragraph = paragraph.replace(/^<p>|<\/p>$/g, '');
        answer.push(paragraph);
    }
}
console.log(answer.join('\n'));
