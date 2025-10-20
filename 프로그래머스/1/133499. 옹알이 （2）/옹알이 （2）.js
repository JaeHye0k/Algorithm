function solution(babbling) {
    const regex1 = /(aya|ye|woo|ma)\1/;
    const regex2 = /^(aya|ye|woo|ma)+$/;
    
    return babbling.filter(e => !regex1.test(e) && regex2.test(e)).length;
}
