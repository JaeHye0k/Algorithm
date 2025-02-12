for _ in range(int(input())):
    n = int(input())
    d_zero = [0] * 41
    d_one = [0] * 41
    d_zero[0] = 1
    d_zero[1] = 0
    d_one[0] = 0
    d_one[1] = 1
    for i in range(2, n+1):
        d_zero[i] = d_zero[i-1]+d_zero[i-2]
        d_one[i] = d_one[i-1]+d_one[i-2]
    print(f'{d_zero[n]} {d_one[n]}')
