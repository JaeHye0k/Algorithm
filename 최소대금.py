pasta = []
juice = []
result = 0

for i in range(3):
    pasta.append(int(input()))
for i in range(2):
    juice.append(int(input()))

min_pasta = min(pasta)
min_juice = min(juice)
ten_percent = (min_pasta + min_juice) / 10
result = min_pasta + min_juice + ten_percent
print(round(result,1))


