n = int(input())
fear = list(map(int,input().split()))
fear.sort()

group_count = 0
group_member = 0
for i in fear:
    group_member += 1
    if group_member == i:
        group_count += 1
        group_member = 0
print(group_count)


