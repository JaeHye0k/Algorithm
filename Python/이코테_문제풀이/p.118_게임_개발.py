import copy

n,m = map(int, input().split())
a,b,d = map(int,input().split())
input_table = []
result = 1
for _ in range(n):
    # 각각의 요소들을 정수형으로 변환하는 걸 놓쳐서 계속 '0' == 0이 false가 떠서 문제 푸는데 오래 걸림
    input_table.append(list(map(int,input().split())))
direction = [
    (-1,0), # 북쪽을 바라보고 있을 경우 
    (0,1), # 동쪽을 바라보고 있을 경우
    (1,0), # 남쪽을 바라보고 있을 경우 
    (0,-1) # 서쪽을 바라보고 있을 경우
]
visited = copy.deepcopy(input_table) # 방문한 곳
visited[a][b] = 1 # 현재 있는 곳 방문 처리
turn_count = 0

# 왼쪽으로 회전
def turn_left():
    global d, turn_count
    if d == 0: d = 3
    else: d -= 1
    turn_count += 1
    
while(True):
    # 모든 방향을 방문했을 경우 한 칸 후퇴
    if turn_count == 4:
        x,y = direction[d]
        next_a = x - a
        next_b = y + b
        # 뒤에 바다가 있을 경우 종료
        if input_table[next_a][next_b] == 1:
            break
        a = next_a
        b = next_b
        turn_count = 0
    turn_left()
    x,y = direction[d]
    next_a = x + a
    next_b = y + b
    # 방문한 적 없는 곳일 경우 방문
    if visited[next_a][next_b] == 0: 
        a = next_a
        b = next_b
        visited[a][b] = 1
        turn_count = 0
        result += 1
    else:
        continue
        
print(result)