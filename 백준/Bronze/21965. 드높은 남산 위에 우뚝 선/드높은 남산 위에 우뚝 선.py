n = int(input())
array = list(map(int, input().split()))
up = True


def mountine():
    global up
    for i in range(n-1):
        if up and array[i] < array[i+1]:
            continue
        elif up and array[i] > array[i+1]:
            up = False
        elif up == False and array[i] > array[i+1]:
            continue
        else:
            return False
    return True


if mountine():
    print("YES")
else:
    print("NO")
