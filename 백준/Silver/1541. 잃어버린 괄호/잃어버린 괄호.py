# 입력받은 식
expression = input().split('-')
num = []

for i in expression:
    # + 기호로 나눈 문자열을 정수로 변환한 뒤 합을 구함
    seperatedByPlus = i.split('+')
    num.append(sum(map(int, seperatedByPlus)))

# 첫 번째 수를 제외한 나머지 수 전부 뺄셈
result = num[0]
for i in range(1, len(num)):
    result -= num[i]

print(result)
