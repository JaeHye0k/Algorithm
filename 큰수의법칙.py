n,m,k = map(int,input().split())
array = list(map(int,input().split()))
array.sort(reverse=True) # 내림차순

first = array[0]
second = array[1]

result = 0
result += int(m / (k+1)) * (first * k + second)
result += m % (k+1) * first

print(result)
