s = input('Diga uma string: ')

for x in range(len(s) + 1, 0, -1):
    print(s[0:x])