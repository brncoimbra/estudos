resp = 's'

while (resp == 's'):
    valor = float(input('Digite o preço do carro: '))
    ano = int(input('Digite o ano do carro: '))
    desc1 = valor * 12/100
    desc2 = valor * 7/100
    descf1 = valor - desc1
    descf2 = valor - desc2
    if (ano <= 2010):
        print('O valor do desconto é de {} Reais.'.format(descf1))
    else:
        print('O valor do desconto é de {} Reais.'.format(descf2))
    resp = input('Deseja continuar? (S/N)')
print('Obrigado pelas simulações')

