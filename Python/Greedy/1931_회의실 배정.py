# 회의의 수 = n
n = int(input())
# 각각의 회의의 시작 시간과 끝나는 시간을 입력
array = []
for _ in range(n):
    start, end = map(int, input().split())
    # 리스트 안에 튜블 형태로 저장
    array.append((start, end))

# 시작 시간을 기준으로 정렬
array.sort(key=lambda x: x[0])
# 끝나는 시간을 기준으로 정렬
array.sort(key=lambda x: x[1])
# 회의의 최대 개수를 담을 변수
count = 0
# 이전 회의의 끝나는 시간을 담을 변수
previous_end = 0
for start, end in array:
    if start >= previous_end:
        count += 1
        previous_end = end

print(count)
