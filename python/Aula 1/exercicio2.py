n1 = int(input('Informe um número inteiro: '))

print(f'Tabuada do {n1} do 0 ao 9:')

for x in range(0,10,1):
    tab = n1 * x
    print(f'{n1} x {x} = {tab}')
