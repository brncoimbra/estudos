const frontBeginners = [
  { name: 'Carlinhos da massa', age: 25, title: 'JR', test: 35 },
  { name: 'Joãzinho do pastel', age: 32, title: 'PL', test: 56 },
  { name: 'Harry do Potter', age: 80, title: 'SR', test: 90 },
  { name: 'Vitinho o pequeno', age: 50, title: 'JR', test: 55 },
  { name: 'Juvenal', age: 80, title: 'SR', test: 55 },
  { name: 'Torquato', age: 32, title: 'JR', test: 55 },
]

// ----------------- Método antigo -------------------

let sumTest = 0

for (x = 0; x < frontBeginners.length; x++) {
  sumTest += frontBeginners[x].test
}

// console.log('Resultado1 ', sumTest)

// ----------------- Método menos antigo -------------------

let sumTest2 = 0

frontBeginners.forEach((item) => {
  sumTest2 += item.test
})

// console.log('Resultado2 ', sumTest2)

// ----------------- Método atual dificuldade fácil -------------------

const sumTest3 = frontBeginners.reduce((acc, current) => {
  return acc + current.test
}, 0)

// console.log('Resultado3: ', sumTest3)

// ----------------- Método atual dificuldade média -------------------

const reducerDosBeginners = frontBeginners.reduce((acc, current) => {
  const minorAge = acc.minorAge < current.age ? acc.minorAge : current.age
  const olderAge = acc.olderAge > current.age ? acc.olderAge : current.age
  const sumTest = acc.sumTest + current.test

  return { minorAge, olderAge, sumTest }
}, {
  sumTest: 0,
  minorAge: undefined,
  olderAge: 0,
})

// console.log(reducerDosBeginners)

// ----------------- Método atual dificuldade díficil -------------------

const howManyTitles = frontBeginners.reduce((acc, current) => {
  if (acc[current.title] == null) {
    acc[current.title] = 1
  } else {
    acc[current.title]++
  }

  return acc
}, {})

// console.log(howManyTitles)

// ----------------- Método atual dificuldade avançado -------------------

const peoplePerAge = frontBeginners.reduce((acc, current) => {
  const age = current.age

  if (acc[age] == null) acc[age] = []
  acc[age].push(current.name)

  return acc
}, {})

// console.log(peoplePerAge)