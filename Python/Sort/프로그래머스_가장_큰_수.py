# def solution1(numbers): # [6, 10, 2]
#     numbers.sort(reverse=True) # [10, 6, 2]
#     return "".join(map(str,numbers)) 
# print(solution1([6,10,2])) # 1062(x) -> 6210(o)



# def solution2(numbers):
#     numbers = list(map(str,numbers))
#     numbers.sort(reverse=True)
#     return "".join(numbers)
# print(solution2([6,10,2])) # 6210(o)
# print(solution2([6,65])) # 656(x) -> 665(o)
# print(solution2([0,0,0,0])) # 0000(x) -> 0(o)

def solution3(numbers):
    numbers = list(map(str,numbers))
    numbers.sort(key=lambda x: x*3, reverse=True)
    return str(int("".join(numbers)))
print(solution3([0,0,0,0])) # 0(o)
print(solution3([6,65])) # 665(o)
print(solution3([654, 65, 6, 5])) # 6656545(o)