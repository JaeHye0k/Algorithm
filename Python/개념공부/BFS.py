# collections 모듈의 deque 라이브러리 사용
from collections import deque

def bfs(graph, start, visited):
    # 큐에 시작 노드 삽입
    queue = deque([start])
    # 시작 노드 방문 처리
    visited[start] = True
    # 큐가 빌 때까지 반복
    while queue: 
        # 큐에서 원소를 하나씩 뽑아서 출력
        v = queue.popleft()
        print(v, end=' ')
        # 해당 원소(노드)와 연결된 노드중 아직 방문하지 않은 노드를 큐에 삽입
        for i in graph[v]:
            if not visited[i]:
                queue.append(i)
                visited[i] = True

graph = [
    [], 
    [2,3,8],
    [1,7],
    [1,4,5],
    [3,5],
    [3,4],
    [7],
    [2,6,8],
    [1,7]
]

visited = [False] * 9

bfs(graph, 1, visited)

