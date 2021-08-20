# BFS를 위한 deque라이브러리
from collections import deque

# n = 노드의 개수, m = 간선, v = 출발노드
n, m, v = map(int, input().split())
# 리스트를 노드번호와 1:1로 대응시키기 위해 n+1개로 만들어줌
# (리스트는 0부터 시작하기 때문에)
graph = [[] for _ in range(n+1)]

# 간선 입력 (양방향이기 때문에 양쪽 노드에 다 연결해줌)
for i in range(m):
    a, b = map(int, input().split())
    graph[a].append(b)
    graph[b].append(a)

# 방문할 수 있는 정점이 여러 개인 경우에
# 정점 번호가 작은 것을 먼저 방문해야되기 때문에 각 노드에 간선을 오름차순으로 정렬해줌
for i in range(1, n+1):
    graph[i].sort()

# 방문 여부를 파악하기 위한 리스트
visited_dfs = [False] * (n+1)
visited_bfs = [False] * (n+1)

# DFS 정의 (Stack)


def dfs(start):
    # 출발 노드를 스택에 삽입하고 방문처리
    visited_dfs[start] = True
    print(start, end=' ')

    # 스택의 최상단 노드에 방문하지 않은 인접 노드가 있으면
    # 그 인접 노드를 스택에 넣고 방문 처리
    for i in graph[start]:
        if not visited_dfs[i]:
            dfs(i)

# BFS 정의 (Queue)


def bfs(start):
    # 출발 노드를 큐에 삽입하고 방문처리
    queue = deque([start])
    visited_bfs[start] = True

    # 큐가 빌때까지
    while queue:
        # 큐에서 노드를 꺼내
        now = queue.popleft()
        print(now, end=' ')
        # 해당 노드의 인접 노드 중에서
        for i in graph[now]:
            # 방문하지 않은 노드를 모두 큐에 삽입하고 방문처리
            if not visited_bfs[i]:
                queue.append(i)
                visited_bfs[i] = True


dfs(v)
print()
bfs(v)
