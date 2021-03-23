s = list(input())
sum = 0
s.sort()
while ord(s[0]) < 65:
    sum += int(s[0])
    s.pop(0)
s.append(str(sum))
print(''.join(s))