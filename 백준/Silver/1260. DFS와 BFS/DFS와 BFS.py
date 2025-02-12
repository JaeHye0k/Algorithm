from collections import deque

n, m, v = map(int, input().split())
graph = [[] for _ in range(n+1)]

for i in range(m):
    a, b = map(int, input().split())
    graph[a].append(b)
    graph[b].append(a)
for i in range(1, n+1):
    graph[i].sort()

visited_dfs = [False] * (n+1)
visited_bfs = [False] * (n+1)


def dfs(start):
    visited_dfs[start] = True
    print(start, end=' ')
    for i in graph[start]:
        if not visited_dfs[i]:
            dfs(i)


def bfs(start):
    q = deque()
    q.append(start)
    visited_bfs[start] = True
    while q:
        now = q.popleft()
        print(now, end=' ')
        for i in graph[now]:
            if not visited_bfs[i]:
                q.append(i)
                visited_bfs[i] = True


dfs(v)
print()
bfs(v)
