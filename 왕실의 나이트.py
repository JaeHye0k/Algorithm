start = input()
dx = [1,-1,-2,-2,1,-1,2,2]
dy = [2,2,1,-1,-2,-2,1,-1]
x = ord(start[0])
y = int(start[1])
count = 0

for i in range(len(dx)):
    nx = x + dx[i]
    ny = y + dy[i]
    if ny < 1 or ny > 8 or nx < 97 or ny > 104: continue
    count += 1

print(count)