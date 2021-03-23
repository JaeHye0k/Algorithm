#꽃의 총 개수
n = int(input())

#꽃이 피고 지는 날짜(2차원 배열)
flower = []

# 월, 일 처리를 편리하게 하기위해 월에 100을 곱함
for _ in range(n):
    arr = list(map(int,input().split()))
    start = arr[0]*100+arr[1]
    end = arr[2]*100+arr[3]
    flower.append([start,end])
flower.sort()

maxdate = 0
memo = 0 # 가장 꽃이 연달아서 오래필수 있는 날
count = 0
start = 301

for i in range(n):
    #목표 달성시 종료
    if start > 1130:
        break

    # 꽃을 피울 수 있는 경우
    if flower[i][0] <= start and flower[i][1] > start:

        # 카운트가 안되어있을 경우(첫 반복시)
        if memo != start:
            memo = start
            count += 1

        # 가장 오랫동안 필 수 있는 꽃을 maxdate에 저장
        if maxdate < flower[i][1]:
            maxdate = flower[i][1]

    # 꽃을 피울 수 없는 경우
    else:
        # i번째 꽃만으론 피울 수 없지만 이전 꽃이 있을 경우
        if memo == start:
            # i-1번째의 꽃이 저물기 전에 i번째 꽃이 필 수 있는 경우
            if flower[i][0] <= maxdate and flower[i][1] > maxdate :
                start = maxdate
                memo = start
                maxdate = flower[i][1]
                count += 1
        else:
            if start < flower[i][0]:
                count = 0
                break

# 모든 날짜를 탐색하였지만 11월 30일까지 꽃을 못피울때
if maxdate <= 1130:
    count = 0

print(count)



