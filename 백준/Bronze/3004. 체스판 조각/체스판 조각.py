n = int(input())
first = 1
second = 1
for i in range(1,n+1):
    if i%2 != 0:
        first +=1
    else:
        second += 1
sum = first * second
print(sum)