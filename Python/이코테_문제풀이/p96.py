# 시간 복잡도 O(N)

# 행의 개수 N, 열의 개수 M
n, m = map(int, input().split())
data = []
result = 0
# N * M에 들어갈 데이터 입력
for i in range(n):
    data = list(map(int, input().split()))
    # 해당 행의 가장 작은 수 찾기
    min_value = min(data)
    # 가장 작은 수들 중에 큰 수 찾기
    result = max(result, min_value)

print(result)
