from math import *
d,h,w = map(int,input().split())

# "피타고라스의 정리"를 이용해 "대각선의 비" 구하기
l = sqrt(pow(h,2)+pow(w,2)) 
# 비의 실제 값 구하기

# 전체 값 = 대각선의 실제 길이(52)
# 구하고자 하는 값의 비 = 너비의 비(16) or 높이의 비(9)
# 전체 비 = 대각선의 비(l)

# 구하고자 하는 값 = 전체 값 * 구하고자 하는 값의 비 / 전체 비
a = d * h / l
b = d * w / l

#소수점 자리를 없애기 위해 내림
a = floor(a)
b = floor(b)

print(f'{a} {b}')