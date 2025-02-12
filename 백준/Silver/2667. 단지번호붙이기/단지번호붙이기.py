# BFS를 구현하기 위한 Deque 라이브러리
from collections import deque
# n=지도의 크기(n*n)
n = int(input())
graph = []

for i in range(n):
    graph.append(list(map(int, input())))

# 네 방향 (상,하,좌,우)
dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]
# 단지 번호를 매기기 위한 변수
num = 0
# 한 단지안에 있는 집의 수를 저장하기 위한 리스트
count_array = []
# BFS 정의


def bfs(x, y):
    global num
    # 한 단지에 있는 집의 수를 세기위한 변수
    count = 0
    # 해당 노드에 집(1)이 있을경우
    if graph[x][y] == 1:
        num += 1
        q = deque()
        # 출발 노드 방문처리
        graph[x][y] = 0
        q.append((x, y))
        while q:
            x, y = q.popleft()
            count += 1
            for i in range(4):
                nx = x + dx[i]
                ny = y + dy[i]
                # 지도의 범위를 벗어날 경우 무시
                if nx < 0 or ny < 0 or nx >= n or ny >= n:
                    continue
                # 다음 방향에 집이 있을 경우
                elif graph[nx][ny] == 1:
                    # 해당 집을 방문 처리
                    graph[nx][ny] = 0
                    q.append((nx, ny))
    return count


for x in range(n):
    for y in range(n):
        count = bfs(x, y)
        # 해당 좌표에 집이 있을 경우
        if count != 0:
            count_array.append(count)
# 각 단지에 있는 집의 수를 오름차순으로 정렬
count_array.sort()
print(num)
for i in count_array:
    print(i)
