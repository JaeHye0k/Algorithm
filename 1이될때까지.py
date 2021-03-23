n, k = map(int,input().split())
count = 0

while True:
    count += n % k
    n = n // k
    count += 1
    if n == 1: break

print(count)

