import random

num = random.randint(1, 10)
kick = 0
chance = 3

while kick != num:
    kick = int(input('O numero está entre 1 e 10: '))
    if chance > 0:
        if kick == num:
            print(f'Você acertou! O numero era {num}')
        elif kick < num:
            chance = chance - 1
            print(f'Você errou, o numero é maior e voce tem {chance} tentativas')
        else: 
            chance = chance - 1
            print(f'Você errou, o numero é menor e voce tem {chance} tentativas')
    if chance == 0:
        print('Suas chances acabaram! :(')
        break