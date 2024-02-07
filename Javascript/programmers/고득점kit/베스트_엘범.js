function solution(genres, plays) {
    let dic = {};
    genres.forEach((genre, i) => {
        dic[genre] = dic[genre] + plays[i] || plays[i];
    });
    let dupDic = {};
    return genres
        .map((g, i) => ({ genre: g, count: plays[i], index: i }))
        .sort((a, b) => {
            // 장르가 다를 경우 총 재생수로 내림차순
            if (a.genre !== b.genre) return dic[b.genre] - dic[a.genre];
            // 재생 수가 다를 경우 재생수로 내림차순
            if (a.count !== b.count) return b.count - a.count;
        })
        .filter((song) => {
            if (dupDic[song.genre] >= 2) return false;
            dupDic[song.genre] = dupDic[song.genre] + 1 || 1;
            return true;
        })
        .map((song) => song.index);
}
