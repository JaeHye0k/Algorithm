function solution(sizes) {
    // 큰 수는 앞으로, 작은 수는 뒤로 배치
    sizes = sizes.map(([w, h]) => (w > h ? [w, h] : [h, w]));
    let [width, height] = [0, 0];
    sizes.forEach(([w, h]) => {
        if (w > width) width = w;
        if (h > height) height = h;
    });
    return width * height;
}
