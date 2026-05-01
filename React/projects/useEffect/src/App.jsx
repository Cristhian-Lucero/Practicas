import { useState } from 'react'
import './App.css'
import { Relleno } from './components/Relleno';
import { Turnos, WINNER_COMBOS } from './constanst';
import { checkWinner, checkEndGame } from './logic/tablero';
import { Winner } from './components/Winner';
import { Tablero } from './components/Tablero';

function App() {
  const [tablero,setTablero] = useState(() => {
    const estadoTablero = JSON.parse(localStorage.getItem('estadoTablero'))
    return estadoTablero ? estadoTablero : Array(9).fill(null)
  })
  const [turno,setTurno] = useState(() => {
    const estadoTurno = localStorage.getItem('estadoTurno')
    return estadoTurno ? estadoTurno : Turnos.X
  })
  const [winner,setWinner] = useState(null) //null: no hay ganador, false: hay empate

  const updateTablero = (indice) => {
    if (tablero[indice] || winner) return
    // Cambia el turno
    const newTurno = (turno===Turnos.X) ? Turnos.O : Turnos.X
    setTurno(newTurno)
    // Actualiza el Tablero
    const newTablero = [...tablero]
    newTablero[indice] = turno
    setTablero(newTablero)
    // guardar estado 
    localStorage.setItem('estadoTablero', JSON.stringify(newTablero))
    localStorage.setItem('estadoTurno', newTurno)
    // revisda si hay ganador
    const newWinner = checkWinner(newTablero)
    if (newWinner) {
      setWinner(newWinner)
    } else if (checkEndGame(newTablero)){
      setWinner(false) // Empate
    }
  }

  const resetGame = () => {
    setTablero(Array(9).fill(null))
    setTurno(Turnos.X)
    setWinner(null)
    localStorage.removeItem('estadoTablero')
    localStorage.removeItem('estadoTurno')
  }

  return (
    <>
      <h1>TIC TAC TOE</h1>
      <section className='tablero'>
      <Tablero tablero={tablero} updateTablero={updateTablero}/>
      </section>
      <section className='turno'>
        <Relleno isSelected={turno === Turnos.X}>{Turnos.X}</Relleno>
        <Relleno></Relleno>
        <Relleno isSelected={turno === Turnos.O}>{Turnos.O}</Relleno>
      </section>
      <Winner winner={winner} resetGame={resetGame} />
    </>
  )
}

export default App
