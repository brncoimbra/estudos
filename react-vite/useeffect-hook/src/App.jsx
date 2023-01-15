import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [countB, setCountB] = useState(0)

  const [data, setData] = useState('')
  // Que vai executa sempre.
  useEffect(() => {
    console.log('excuta sempre')
  })

  // Executa ao iniciar.
  useEffect(() => {
    console.log('executa na primeira vez que carrega')
  }, [])

  // Executa sempre que um estado específico é alterado.
  useEffect(() => {
    console.log('Executa sempre que um estado específico é alterado')
  }, [count])

  // Clean Up
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log(`O count foi executado ${count}`)
    }, 1000)

    return () => {
      clearTimeout(timer)
    }
  }, [count])

  // Caso real - request API
  useEffect(() => {
    fetch('https://api.github.com/users/brncoimbra/repos')
      .then(res => res.json())
      .then(data => setData(data))
  }, [])

  // Validação utilizada para que nao ocorra erro no map como is not a function
  // if (!data) {
  //   <h3>Loading...</h3>
  // }

  return (
    <div className="App">
      <h1>Front Beginners</h1>
      {/* validação diretamente no código */}
      {data && data.map((repo) => { return (<div>{repo.full_name}</div>) })}
      <div className="card">
        <p>Foi renderizado {count}</p>
        <button onClick={() => setCount((count) => count + 1)}>
          Render
        </button>
      </div>
      <div className="card">
        <p>Foi renderizado {countB}</p>
        <button onClick={() => setCountB((count) => count + 1)}>
          Render B
        </button>
      </div>
    </div>
  )
}

export default App
