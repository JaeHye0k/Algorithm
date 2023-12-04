# 로프의 개수
n = int(input())
# 각 로프의 허용 중량
ropes = [int(input()) for _ in range(n)]
ropes.sort(reverse=True)  # 내림차순 정렬
weight = 0
# 로프를 선택했을 때 사용 로프 개수에 따라 로프가 들 수 있는 최대 중량 계산
for i in range(n):
    weight = max(weight, ropes[i] * (i+1))
print(weight)
