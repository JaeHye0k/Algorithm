n = int(input())
b5=-1 # 안나눠 질 경우 -1
b3=0
for i in range(n//5,-1,-1):  # i = 5kg 봉지의 개수
    if (n-i*5)%3 == 0:
        b5 = i
        b3 = (n-i*5)//3
        break
print(b5+b3)