l,p = map(int,input().split())
a,b,c,d,e = map(int,input().split())
total = l*p
a -= total
b -= total
c -= total
d -= total
e -= total
print(f'{a} {b} {c} {d} {e}')