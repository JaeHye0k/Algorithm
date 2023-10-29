import time
# 배열의 크기 N, 숫자가 더해지는 횟수 M, 연속가능한 횟수 K
n, m, k = map(int, input().split())
data = list(map(int, input().split()))

start_time = time.time()

data.sort()
first = data[n-1]  # 가장 큰 수
second = data[n-2]  # 두 번째로 큰 수
# (first가 등장한 횟수 * first) + (second가 등장한 횟수 * second)
result = ((m // k) * (first * k)) + ((m % k) * second)
print(result)

end_time = time.time()
print(f'실행 시간: {end_time - start_time}')
