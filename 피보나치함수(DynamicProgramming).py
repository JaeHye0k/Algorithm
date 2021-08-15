for _ in range(int(input())):
    n = int(input())
    # 0과 1의 Optimal solution값을 담을 DP테이블 생성
    d_zero = [0] * 41
    d_one = [0] * 41
    # 초기 Optimal Solution값 설정
    d_zero[0] = 1
    d_zero[1] = 0
    d_one[0] = 0
    d_one[1] = 1

    # 점화식: d[i] = d[i-1] + d[i-2]  (i>=2)
    for i in range(2, n+1):
        d_zero[i] = d_zero[i-1]+d_zero[i-2]
        d_one[i] = d_one[i-1]+d_one[i-2]

    # 0과 1이 등장하는 횟수 출력
    print(f'{d_zero[n]} {d_one[n]}')
