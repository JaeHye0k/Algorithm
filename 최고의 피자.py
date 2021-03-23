n = int(input()) # n = 토핑 종류 수
a,b = map(int,input().split()) # a = 도우의 가격, b = 토핑의 가격
c = int(input()) # c = 도우의 칼로리
tp_cal = [] # 토핑의 칼로리
for i in range(n):
    tp_cal.append(int(input()))
tp_cal.sort(reverse=True)

total_cal = c
total_doller = a
cal_per_doller = c / a

for i in tp_cal:
    next_total_cal = total_cal + i
    next_total_doller = total_doller + b
    next_cal_per_doller = next_total_cal / next_total_doller

    if next_cal_per_doller > cal_per_doller:
        total_cal = next_total_cal
        total_doller = next_total_doller
        cal_per_doller = next_cal_per_doller
    else: break

print(int(cal_per_doller))


