import sys

t = int(input())
for _ in range(t):
    input_data = sys.stdin.readline().rstrip().split()
    a = int(input_data[0])
    b = int(input_data[1])
    print(a+b)