n, m = map(int,input().split()) # n = 성수기 기간, m = 방의 개수
room = []
for i in range(n):
    room.append(input())
s, t = map(int,input().split())
zeros_list = [0] * m

def new_check(day_data):
    check_list = [0] * m
    for idx, ox in enumerate(day_data):
        if ox == "O":
            check_list[idx] = 1
    if check_list == zeros_list: return -1 # 다음날 묵을 방이 없을경우 -1 리턴
    return check_list

def check_max_day(room):
    move = -1 # 방을 옮기는 횟수 (처음 방에 들어올때 move += 1 되기 때문에 -1부터 시작해줌)
    check_list = [0]*m # 예약 가능한 방을 check 하기 위해 방의 개수만큼 list를 만든다 (OXOX 의 형태가 1010으로 바뀐 리스트)
    for day_data in room:
        for idx, ox in enumerate(day_data):
            if check_list[idx] == 1 and ox == "X": # 다음날 같은 방이 사용 불가능할시 그 방의 idx에 해당하는 check_list의 값을 0(사용할 수 없음)으로 바꿔줌
                check_list[idx] = 0
        if check_list == zeros_list: # 방을 옮겨야 되는 경우 (처음 방에 들어올때도 실행됨)
            move += 1
            check_list = new_check(day_data)
        if check_list == -1: return -1
    return move

room = room[s-1:t-1] # 고객이 묵는 기간만큼만 슬라이싱
print(check_max_day(room))




