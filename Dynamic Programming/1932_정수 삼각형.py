n = int(input())
array = []
for _ in range(n):
    array.append(list(map(int, input().split())))
d = [[0]*(i+1) for i in range(n)]

for i in range(n, 0, -1):
    for j in range(i):
        d[i][j] = d[i+1][j] + d[i+1][j+1]
