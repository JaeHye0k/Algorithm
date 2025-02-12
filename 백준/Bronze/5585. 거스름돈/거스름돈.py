payment = int(input())
change_list = [500, 100, 50, 10, 5, 1]
change = 1000-payment
result = 0
for i in change_list:
    result += change // i
    change = change % i
print(result)
