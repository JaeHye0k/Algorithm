function solution(citations) {
    let answer = 0;
    citations.sort((a, b) => b - a);
    citations.forEach((c, i) => {
        if (c >= i + 1) answer = i + 1; // 인용된 수가 현재 논문의 개수보다 더 많거나 같아야 함.
    });
    return answer;
}

// https://www.ibric.org/bric/trend/bio-series.do?mode=series_view&newsArticleNo=8802417&articleNo=8882714&beforeMode=latest_list#!/list
