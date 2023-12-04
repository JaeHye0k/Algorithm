# 입력값
payment = int(input())
# 화폐 단위
change_list = [500, 100, 50, 10, 5, 1]
# 잔돈
change = 1000-payment
# 거스름돈 개수
result = 0
for i in change_list:
    result += change // i
    change = change % i
print(result)
