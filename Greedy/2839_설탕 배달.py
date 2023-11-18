n = int(input())
five_kg, three_kg = 0, 0  # 5kg, 3kg 설탕 봉지 개수
canNotDivision = False

five_kg += n // 5  # 5kg 짜리로 나누기
n %= 5

# 5kg로 나눠떨어지지 않았을 경우(나머지가 발생한 경우)
while n != 0:
    # 나머지를 3kg짜리로 나누기
    three_kg += n // 3
    n %= 3
    # 3kg로도 나눠떨어지지 않고, 5kg 설탕 봉지가 1개 이상 있을 경우
    if (n != 0) and (five_kg > 0):
        # 5kg짜리 봉지를 하나씩 풀음
        five_kg -= 1
        n += 5
    # 3k로도 나눠지지 않고, 5kg짜리 여분도 없을 경우
    elif (n != 0) and (five_kg == 0):
        canNotDivision = True
        break

if canNotDivision:
    result = -1
else:
    result = five_kg + three_kg

print(result)
