# move를 순회하며 L,R,U,D 각각의 경우를 처리해야 한다.
# 공간 밖으로 나갈 경우 무시해야 한다.
# 5
# R R R U D D
n = int(input());
plan = input().split();

x, y = 1, 1;
direction = {
    'L':(0,-1),
    'R':(0,1),
    'U':(-1,0),
    'D':(1,0)
};
def move(key):
    global x,y;
    temp_x = x + direction.get(key)[0];
    temp_y = y + direction.get(key)[1];
    if temp_x > 0 and temp_y > 0 and temp_x <= n and temp_y <= n:
        x = temp_x;
        y = temp_y;

for i in plan:
    move(i);

print(x,y);
