n, k = map(int, input().split())
a = []
result = 0
for i in range(n):
    a.append(int(input()))
# 화폐 단위가 큰 순으로 정렬(NlogN)
a.sort(reverse=True)
# 큰 화폐부터 차례대로
for i in a:
    if i > k:
        continue
    result += k // i
    k %= i
print(result)
