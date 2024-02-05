function solution(sizes) {
    let width = sizes[0][0];
    let height = sizes[0][1];
    sizes.forEach(([w, h]) => {
        let temp1 = Math.abs(width - w) + Math.abs(height - h);
        let temp2 = Math.abs(width - h) + Math.abs(height - w);
        if (temp1 < temp2) {
            width = w > width ? w : width;
            height = h > height ? h : height;
        } else if (temp1 > temp2) {
            width = h > width ? h : width;
            height = w > height ? w : height;
        }
    });
    return width * height;
}
