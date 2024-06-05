const input = require('fs').readFileSync('./Javascript/input.txt').toString().trim();
const nums = input.match(/\d/g);
const string = input.match(/[A-Z]/g);
string.sort();
const sum = nums.reduce((acc, cur) => (acc += Number(cur)), 0);
console.log(`${string.join('')}${sum}`);
