a,b = map(int,input().split())
c = int(input())

a += c//60
b += c%60

a += b//60
a %= 24
b %= 60

print(a,b)