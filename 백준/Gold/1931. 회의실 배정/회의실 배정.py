# 회의의 수
n = int(input())
# 회의의 시작 시간과 끝나는 시간
a = []
for _ in range(n):
    start, end = map(int, input().split())
    a.append((start, end))

# 회의 시작 시간 기준으로 오름차순 정렬
a.sort(key=lambda time: time[0])
# 회의 끝나는 시간 기준으로 오름차순 정렬
a.sort(key=lambda time: time[1])

previous_end = 0
count = 0

for start, end in a:
    if start >= previous_end:
        count += 1
        previous_end = end

print(count)
