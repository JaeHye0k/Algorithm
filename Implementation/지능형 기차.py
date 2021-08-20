max_num = 0  # 가장 많았던 인원을 저장하는 변수
sum = 0  # 기차안에 타고있는 인원을 담는 변수

# 정거장 4번을 거치면서 내리는 인원과 타는 인원을 계산
for i in range(4):
    # n=내리는 인원, m=타는 인원
    n, m = map(int, input().split())
    sum -= n
    sum += m
    # 인원이 가장 많았을때의 인원을 sum에 저장
    max_num = max(sum, max_num)

print(max_num)
