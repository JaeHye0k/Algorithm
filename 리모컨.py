a, b = map(int,input().split())
cha = abs(a-b)
count = cha // 10
cha %= 10

if cha == 1 or cha == 5 or cha == 10:
    count += 1
elif cha == 2 or cha == 4 or cha == 6 or cha == 9:
    count += 2
elif cha == 3 or cha == 7 or cha == 8:
    count += 3

print(count)
