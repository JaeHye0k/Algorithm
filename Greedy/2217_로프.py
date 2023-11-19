# 로프의 총 개수
n = int(input())
# 로프의 허용 중량 입력
ropes = []
# 사용하는 로프의 개수
k = n
# 최대 중량
weight = 0
for _ in range(n):
    ropes.append(int(input()))

ropes.sort()

# O(n^2)?
for _ in ropes:
    if min(ropes) * k < max(ropes):
        k -= 1
        ropes[:] = ropes[-k:]
        weight = max(ropes)
    else:
        weight = max(weight, min(ropes) * k)

print(weight)
