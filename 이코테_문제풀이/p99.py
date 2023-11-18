n, k = map(int, input().split())
count = 0
while True:
    count += n % k  # -1 을 한 횟수
    n = (n//k)*k  # 1 빼기를 거치고 난 뒤 n의 값
    if n < k:  # n이 k보다 작을 때(더 이상 나눌 수 없을 때) 반복문 탈출
        break
    n //= k  # n을 k로 나눔
    count += 1  # 나눈 횟수

count += (n-1)

print(count)
