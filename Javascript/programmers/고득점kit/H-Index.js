function solution(citations) {
    citations.sort((a, b) => b - a);
    let answer = 0;
    for (let i = 0; i < citations.length; i++) {
        if (citations[i] >= i + 1) {
            answer++;
        }
    }
    return answer;
}

// https://www.ibric.org/bric/trend/bio-series.do?mode=series_view&newsArticleNo=8802417&articleNo=8882714&beforeMode=latest_list#!/list
