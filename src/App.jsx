import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Fase 5 Operar con React</h1>
      <div className="card">
       <h3>Integrantes Grupo 9:</h3>
       <h4>Carlos Alberto Acero Contreras</h4>
       <h4>Mauricio Fernando Arce Monsalve</h4>
       <h6>Enlace al proyecto</h6>
       <a href='inicio.html'>Click para abrir el Proyecto</a>
      </div>
      
    </>
  )
}

export default App
