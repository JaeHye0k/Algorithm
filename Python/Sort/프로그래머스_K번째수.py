#cmds 의 길이 = N 일 때 O(N)
def solution(arr, cmds):
    answer = []
    for cmd in cmds:
        i,j,k = cmd
        part = arr[i-1:j]
        part.sort()
        answer.append(part[k-1])
    return answer