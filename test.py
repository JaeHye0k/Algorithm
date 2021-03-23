n,k = map(int,input().split())
num = 0
count = 0
result_idx = 1
idx = 0
for i in range(1, 30+1):
    num += i
arr = [0]*num
arr[0] = 1
for i in range(30-1):
    arr[count+i+1] = 1
    arr[count+i*2+2] = 1
    if i == 30-2: break
    for j in range(i+1):
        count += 1
        if j == 0 :
            result_idx += 3
        else:
            result_idx += 1
        arr[result_idx] = arr[count+i] + arr[count+i+1]
for i in range(n-1):
    for j in range(i+1):
        idx += 1
print(arr[idx+k-1])


