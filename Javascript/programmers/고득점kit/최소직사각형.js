function solution(sizes) {
    // 큰 수를 앞으로 오게 정렬
    sizes = sizes.map((size) => size.sort((a, b) => b - a));
    let width = 0;
    let height = 0;
    sizes.forEach(([w, h]) => {
        width = Math.max(w, width);
        height = Math.max(h, height);
    });
    return width * height;
}
