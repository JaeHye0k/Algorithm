# 시간 복잡도 O(N)

# 행의 개수 N, 열의 개수 M
n, m = map(int, input().split())
data = []

# N * M에 들어갈 데이터 입력
for i in range(n):
    data.append(list(map(int, input().split())))
    # 해당 행의 가장 작은 수가 맨 앞으로 오게 정렬
    data[i].sort()

result = data[0][0]

for i in range(n):
    if result < data[i][0]:
        result = data[i][0]

print(result)
