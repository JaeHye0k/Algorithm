n,k = map(int,input().split())
num = 0
count = 0
result_idx = 1
idx = 0
# 1 ≤ k ≤ n ≤ 30 이므로 미리 최대 크기의 파스칼의 삼각형을 0으로 초기화 해놓음.
for i in range(1, 30+1):
    num += i
arr = [0]*num
# 첫번째 값은 무조건 1임
arr[0] = 1
# 0 으로 초기화된 배열에 값을 넣어줌
for i in range(30-1):
    # 왼쪽 끝과 오른쪽 끝에 있는 1을 처리해줌
    arr[count+i+1] = 1
    arr[count+i*2+2] = 1
    # 이 부분(if i == 30-2: break)이 없으면 index out of range가 뜨고 index out of range를 없애자고 바깥 for문의 range를 (30-2)로 하면
    # 마지막 층 양 옆에 있는 1에 대한 처리가 이루어 지지 않음
    if i == 30-2: break
    for j in range(i+1):
        count += 1
        if j == 0 :
            result_idx += 3
        else:
            result_idx += 1
        # 인접한 두 수의 합을 올바른 index에 넣어줌
        arr[result_idx] = arr[count+i] + arr[count+i+1]

# 파스칼의 삼각형을 완성한 뒤 n행 k번째에 있는 값을 찾기 위한 처리
for i in range(n-1):
    for j in range(i+1):
        idx += 1
print(arr[idx+k-1])


