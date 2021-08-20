n = int(input())
array = list(map(int, input().split()))
up = True


def mountine():
    global up
    for i in range(1, n):
        # 올라가는 중일때
        if up and array[i-1] < array[i]:
            continue
        # 올라가다가 처음 내려갈때
        elif up and array[i-1] > array[i]:
            up = False
        # 내려가는 중일때
        elif up == False and array[i-1] > array[i]:
            continue
        # 평지이거나 내려가다가 다시 올라갈때(산이 아닌경우)
        else:
            return False
    return True


if mountine():
    print("YES")
else:
    print("NO")
