# DFS는 스택 자료구조를 이용한 알고리즘이기 때문에 재귀함수로 쉽게 구현할 수 있다.
def dfs(graph, v, visited):
    visited[v] = True
    print(v,end=' ')
    for i in graph[v]:
        if not visited[i]:
            dfs(graph, i, visited)

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

# 각 노드의 방문 정보를 저장하는 배열 생성
visited = [False] * 9

dfs(graph, 1, visited)
