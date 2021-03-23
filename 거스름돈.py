n = int(input())
count = 0

count += n // 50000
n = n % 50000
count += n // 10000
n = n % 10000
count += n // 5000
n = n % 5000
count += n // 1000
n = n % 1000
count += n // 500
n = n % 500
count += n // 100
n = n % 100
count += n // 50
n = n % 50
count += n // 10
n = n % 10

print(count)
