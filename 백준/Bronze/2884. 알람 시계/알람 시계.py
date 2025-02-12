time = input().split(' ')
h = int(time[0])
m = int(time[1])
cha = m-45
if cha < 0:
    m=60+cha
    h -= 1
    if h < 0:
        h = 23
else:
    m -= 45
print(h,m)