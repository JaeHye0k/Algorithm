# BFS를 구현하기 위한 Deque 라이브러리
from collections import deque
# n=지도의 크기(n*n) 입력
n = int(input())
# 0과 1이 입력될 그래프(리스트)
graph = []
for i in range(n):
    graph.append(list(map(int, input())))

# 인접한 네 방향을 탐색하기 위한 방향을 담는 리스트 (상,하,좌,우)
dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

# 단지 번호를 매기기 위한 변수
num = 0
# 한 단지안에 있는 집의 수를 저장하기 위한 리스트
# count_array[0] = 1단지에 있는 집의 수, count_array[1] = 2 단지에 있는 집의 수 ...
count_array = []

# BFS 정의


def bfs(x, y):
    global num
    # 한 단지에 있는 집의 수를 세기위한 변수
    count = 0
    # 현재 위치에 집이 있을경우
    if graph[x][y] == 1:
        num += 1
        q = deque()
        # 출발 노드 방문처리하고 큐에 삽입
        graph[x][y] = 0
        q.append((x, y))

        # 큐가 빌때까지 수행
        while q:
            x, y = q.popleft()
            # 집의 개수 1 증가
            count += 1
            # 상,하,좌,우에 집이 있는지 확인
            for i in range(4):
                nx = x + dx[i]
                ny = y + dy[i]
                # 지도의 범위를 벗어날 경우 무시
                if nx < 0 or ny < 0 or nx >= n or ny >= n:
                    continue
                # 다음 방향에 집이 있을 경우
                elif graph[nx][ny] == 1:
                    # 해당 집을 방문 처리 하고 큐에 삽입
                    graph[nx][ny] = 0
                    q.append((nx, ny))
    # 집의 개수 리턴
    return count


# 모든 좌표를 돌아다니며 BFS 실행
for x in range(n):
    for y in range(n):
        count = bfs(x, y)
        # 집이 있었을 경우 count_array에 집의 개수를 삽입
        if count != 0:
            count_array.append(count)

# 각 단지에 있는 집의 수를 오름차순으로 정렬(집의 수가 작은것부터 출력하기 위해)
count_array.sort()
# 총 단지수 출력
print(num)
# 모든 단지에 있는 집의 수 출력
for i in count_array:
    print(i)
