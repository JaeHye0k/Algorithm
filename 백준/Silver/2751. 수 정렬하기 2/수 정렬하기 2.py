import sys
n = int(input())
array = [0] * n
for i in range(n):
    array[i] = int(sys.stdin.readline())
array.sort()
for i in array:
    sys.stdout.write(str(i)+'\n')
