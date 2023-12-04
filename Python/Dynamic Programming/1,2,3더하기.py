for _ in range(int(input())):
    n = int(input())
    # 1,2,3의 조합으로 n을 만들 수 있는 경우의 수를 담을 DP 테이블 생성
    d = [0] * 11
    # 초기 Optimal Solution값 설정
    d[1] = 1  # 1
    d[2] = 2  # 1+1,2
    d[3] = 4  # 1+1+1,2+1,1+2,3

    # 점화식: d[i] = d[i-1]+d[i-2]+d[i-3]
    for i in range(4, n+1):
        d[i] = d[i-1]+d[i-2]+d[i-3]

    # 출력
    print(d[n])
