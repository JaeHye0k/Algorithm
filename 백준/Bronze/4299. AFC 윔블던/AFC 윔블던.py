s, m = map(int,input().split())
if s+m < 0 or s-m < 0 or (s+m) % 2: # s + m < 0 인 경우는 s가 음수인 경우
                                    # s - m < 0 인 경우는 m가 음수인 경우
                                    # s + m 가 홀수일 경우 True 짝수일 경우 False
    print(-1)
else:
    a = (s + m) // 2
    b = s - a
    print(max(a,b),min(a,b))