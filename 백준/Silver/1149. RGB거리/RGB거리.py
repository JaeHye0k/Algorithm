n = int(input())
d = []
for i in range(n):
    d.append(list(map(int, input().split())))
for i in range(1, n):
    for j in range(3):
        if j == 0:
            d[i][j] = d[i][j] + min(d[i-1][j+1], d[i-1][j+2])
        elif j == 2:
            d[i][j] = d[i][j] + min(d[i-1][j-1], d[i-1][j-2])
        else:
            d[i][j] = d[i][j] + min(d[i-1][j-1], d[i-1][j+1])
print(min(d[n-1]))
