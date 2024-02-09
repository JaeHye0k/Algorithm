function solution(word) {
    const dic = ["A", "E", "I", "O", "U"];
    let count = 0;
    function dfs(s) {
        count++;
        if (s === word) return true;
        if (s.length >= 5) return false;
        for (let j = 0; j < dic.length; j++) {
            if (dfs(s + dic[j])) return true;
        }
    }
    for (let i = 0; i < dic.length; i++) {
        if (dfs(dic[i])) break;
    }
    return count;
}
