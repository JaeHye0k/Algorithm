# 같은 인덱스끼리 곱함
def S(list1, list2):
    result = [x*y for x, y in zip(list1, list2)]
    return result


n = int(input())
a = list(map(int, input().split()))
b = list(map(int, input().split()))

b_sorted = sorted(b, reverse=True)
a_sorted = sorted(a)

print(sum(S(a_sorted, b_sorted)))
