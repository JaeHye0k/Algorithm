from collections import deque
# 미로의 크기 입력받기 n = 세로 길이, m = 가로 길이
n, m = map(int, input().split())
# 맵 정보를 입력받기 위한 리스트
graph = []
for i in range(n):
    graph.append(list(map(int, input())))

# 이동하기 위한 방향 정의(상, 하, 좌, 우)
dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

# BFS 정의


def bfs(x, y):
    # Queue 구현을 위해 deque 라이브러리 사용
    queue = deque()
    queue.append((x, y))
    # 큐가 빌때까지 반복
    while queue:
        x, y = queue.popleft()
        # 현재 위치에서 네 방향으로의 위치 확인
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            # 미로의 공간을 벗어난 경우 무시
            if nx < 0 or ny < 0 or nx >= n or ny >= m:
                continue
            # 해당 노드를 처음 방문하는 경우
            # 바로 전노드에 있던 값+1 을 해준 뒤 큐에 삽입
            if graph[nx][ny] == 1:
                graph[nx][ny] = graph[x][y] + 1
                queue.append((nx, ny))
        # 미로 출구에 있는 값을 반환
        return graph[n-1][m-1]


# BFS를 수행한 결과를 출력
print(bfs(0, 0))
