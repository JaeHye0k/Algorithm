# 큰 화폐부터 차례대로
n, k = map(int, input().split())
a = []
result = 0
for i in range(n):
    a.append(int(input()))
a.sort(reverse=True)
for i in a:
    if i > k:
        continue
    result += k // i
    k %= i
print(result)
