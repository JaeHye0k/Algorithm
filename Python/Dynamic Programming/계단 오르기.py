n = int(input())  # 계단의 개수 입력
d = [0] * 300  # dp 테이블 생성
array = []  # 각 계단의 점수를 입력받을 배열
# 각 계단의 점수를 입력
for _ in range(n):
    array.append(int(input()))

# 문제의 조건중에 마지막 계단을 밟아야 된다는 조건이 있다.
# 마지막 계단을 밟았을 때의 경우는 2가지가 있다.
#   1. 마지막 계단의 전 계단을 밟은 경우 (d[n] = d[n-3] + array[n-1] + array[n])
#   2. 마지막 계단의 전전 계단을 밟은 경우 (d[n] = d[n-2] + array[n])
# 점화식: d[n] = max(d[n] = d[n-3] + array[n-1] + array[n], d[n] = d[n-2] + array[n])
d[0] = array[0]
if n > 1:  # n=1 일때 IndexError 방지
    d[1] = max(array[0]+array[1], array[1])
if n > 2:  # n=2 일때 IndexError 방지
    d[2] = max(array[1]+array[2], d[0]+array[2])
    for i in range(3, n):
        d[i] = max(d[i-3]+array[i-1]+array[i], d[i-2]+array[i])
print(d[n-1])
