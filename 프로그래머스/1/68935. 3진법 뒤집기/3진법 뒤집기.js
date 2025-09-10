function solution(n) {
    const radix3 = n.toString(3)
    const reversed = radix3.split('').reverse();
    const str = reversed.join('');
    return parseInt(str, 3)
}


/*


*/