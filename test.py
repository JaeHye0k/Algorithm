l = int(input()) # 방학 기간
a = int(input()) # 국어 총 페이지
b = int(input()) # 수학 총 페이지
c = int(input()) # 하루에 풀 수 있는 국어 페이지
d = int(input()) # 하루에 풀 수 있는 수학 페이지

for i in range(l-1,0,-1):
    a -= c
    b -= d
    if a<=0 and b <=0:
        print(i)
        break