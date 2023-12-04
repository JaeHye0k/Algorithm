x = int(input())
# DP 테이블 생성
d = [0] * 1000001
# 초기 Optimal Solution 값 설정
d[2] = 1  # 2에서 1로 만들기 위해선 -1연산을 한번만 실행하면 됨

# 점화식: d[i] = min(d[i-1],d[i//2],d[i//3])+1
for i in range(2, x+1):
    d[i] = d[i-1] + 1
    if i % 3 == 0:  # 3으로 나누어 떨어질 경우
        d[i] = min(d[i], d[i//3] + 1)
    if i % 2 == 0:  # 2로 나누어 떨어질 경우
        d[i] = min(d[i], d[i//2] + 1)

# 출력
print(d[x])
