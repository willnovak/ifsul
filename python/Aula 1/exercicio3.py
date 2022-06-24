maior = 0
menor = 0

for x in range(1,11,1):
    n1 = int(input('Informe um número inteiro: '))

    if(x == 1):
        maior = n1
        menor = n1
    if(n1 > maior):
        maior = n1
    if(n1 < menor):
        menor = n1

print(f'O maior número informado é {maior} e o menor é {menor}!')