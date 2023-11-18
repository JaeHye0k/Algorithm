n = int(input())
count_5 = -1  # 5kg 봉지의 개수(나누어 떨어지지 않았을 경우 -1이 출력되게 하기 위해 -1로 초기화)
count_3 = 0  # 3kg 봉지의 개수

# 일단 가능한 만큼 5kg 봉지에 넣어놓고 3kg로 나누어떨어지지 않을경우 5kg봉지를 하나씩 푼다
# i가 0일 경우(5로 아예 나누어떨어지지 않는 경우)도 고려해야되기 때문에 range 함수의 두 번째 인자로 -1을 준다.
for i in range(n//5, -1, -1):
    remain = n-5*i  # 남은 설탕
    # 남은 설탕이 3kg로 나눠떨어질 경우
    if remain % 3 == 0:
        count_5 = i
        count_3 = remain // 3
        break
print(count_5+count_3)
