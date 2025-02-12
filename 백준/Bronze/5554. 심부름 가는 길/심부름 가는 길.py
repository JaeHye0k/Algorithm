sum = 0
for _ in range(4):
    n = int(input())
    sum += n
x = sum // 60
y = sum % 60
print(x)
print(y)