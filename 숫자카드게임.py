n, m = map(int, input().split())
result = 0
for _ in range(n):
    array = list(map(int, input().split()))
    if min(array) > result:
        result = min(array)

print(result)