# move를 순회하며 L,R,U,D 각각의 경우를 처리해야 한다.
# 공간 밖으로 나갈 경우 무시해야 한다.
n = int(input());
plan = input().split();

x, y = 1, 1;
direction = {'L':(-1,0), 'R':(1,0), 'U':(0,-1), 'D':(0,1)};
def move(key):
    global x,y;
    temp_x = x + direction.get(key)[0];
    temp_y = y + direction.get(key)[1];
    if temp_x > 0 and temp_y > 0:
        x = temp_x;
        y = temp_y;

for i in plan:
    move(i);

print(y, x);
# 5
# R R R U D D