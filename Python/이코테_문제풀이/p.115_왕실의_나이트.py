col, row = list(input())
plans = [
    (-1,-2),
    (1,-2),
    (-2,-1),
    (-2,1),
    (-1,2),
    (1,2),
    (2,-1),
    (2,1)
]
def move(col, row):
    global plans
    count = 0
    row = int(row)
    col = ord(col)-ord("a")+1
    for plan in plans:
        temp_row = row + plan[0]
        temp_col = col + plan[1]
        if(temp_row >= 1 and temp_row <= 8 and temp_col >= 1 and temp_col <= 8):
            count += 1
    return count

print(move(col,row))