import time
n = int(input())
data = list(map(int,input().split()))
data.sort()
start_time = time.time()
result = 1
for i in data:
    if result < i:
        break
    result += i
end_time = time.time()
print(result)
print(f'time: {end_time-start_time}')