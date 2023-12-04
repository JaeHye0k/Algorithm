n = int(input())
d = []
# 2차원 DP테이블 생성
for i in range(n):
    d.append(list(map(int, input().split())))

# 서로 이웃하는 집과 색이 다르면서 최소 비용을 구해야됨
# 점화식: d[i][j] = d[i][j] + min(이웃하는 집만 빼고 다), 이웃하는 집 = d[i-1][j]
#        d[i][0] = d[i][j] + min(d[i-1][j+1], d[i-1][j+2])
#        d[i][1] = d[i][j] + min(d[i-1][j-1], d[i-1][j+1])
#        d[i][2] = d[i][j] + min(d[i-1][j-1], d[i-1][j-2])
for i in range(1, n):
    for j in range(3):
        if j == 0:  # R
            d[i][j] = d[i][j] + min(d[i-1][j+1], d[i-1][j+2])
        elif j == 1:  # G
            d[i][j] = d[i][j] + min(d[i-1][j-1], d[i-1][j+1])
        else:  # B
            d[i][j] = d[i][j] + min(d[i-1][j-1], d[i-1][j-2])

# 출력
print(min(d[n-1]))
