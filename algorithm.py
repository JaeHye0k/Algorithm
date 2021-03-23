# 유일성(uniqueness) : 릴레이션에 있는 모든 튜플에 대해 유일하게 식별되어야 한다.
# 최소성(minimality) : 유일성을 가진 키를 구성하는 속성(Attribute) 중 하나라도 제외하는 경우 유일성이 깨지는 것을 의미한다.
def solution(relation):
    answer = 0
    r_count = len(relation)
    c_count = len(relation[0])
    count = 1
    candidate_key = [] # 중복된 값의 개수
    for c in range(c_count): # 4(0~3)
        temp_list = []
        t_f = False
        for r in range(r_count): # 6(0~5)
            temp_list.append(relation[r][c:c+count])
            candidate_key[r] = temp_list.count(relation[r][c:c+count]) # 같은 값이 2개 이상이면 중복
        for i in candidate_key:
            if i >= 2 : break # 중복된 값이 있을 경우
            else: t_f = True # 중복된 값이 없을 경우(유일성 만족)
        if t_f:
            answer += 1
        count += 1

    return answer

relation = [["100","ryan","music","2"],
            ["200","apeach","math","2"],
            ["300","tube","computer","3"],
            ["400","con","computer","4"],
            ["500","muzi","music","3"],
            ["600","apeach","music","2"]]
print(solution(relation))

