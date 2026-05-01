import { useState } from 'react'
import './App.css'

const Turnos = {
  X: 'x',
  O: 'o'
}

const WINNER_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

const Relleno = ({children, isSelected ,actualizarTablero, indice, updateTablero}) => {
  const clase = isSelected ? 'cuadro' : 'noCuadro';

  const hundleClick = () => {
    updateTablero(indice);
  }

  return(
    <div onClick={hundleClick} className={clase}>
      {children}
    </div>
  )
}

function App() {
  const [tablero,setTablero] = useState(Array(9).fill(null))
  const [turno,setTurno] = useState(Turnos.X)
  const [winner,setWinner] = useState(null) //null: no hay ganador, false: hay empate

  const checkWinner = (chequearTablero) => {
    // comprobamos si alguien ya gano
    for (const combo of WINNER_COMBOS) {
      const [a,b,c] = combo
      if (chequearTablero[a] && chequearTablero[a] === chequearTablero[b] && chequearTablero[a] === chequearTablero[c]){
        return chequearTablero[a]
      }
    }
    // si nadie gano
    return null
  }
  const updateTablero = (indice) => {
    if (tablero[indice] || winner) return

    const newTurno = (turno===Turnos.X) ? Turnos.O : Turnos.X
    const newTablero = [...tablero]
    newTablero[indice] = turno
    setTablero(newTablero)
    const newWinner = checkWinner(newTablero)
    if (newWinner) {
      setWinner(newWinner)
    }
    setTurno(newTurno)
  }
  return (
    <>
      <h1>TIC TAC TOE</h1>
      <section className='tablero'>
        {
          tablero.map((campo,index) => {
            return (
              <Relleno isSelected key={index} indice={index} updateTablero={updateTablero}>{campo}</Relleno>
            )
          })
        }
      </section>
      <section className='turno'>
        <Relleno isSelected={turno === Turnos.X}>{Turnos.X}</Relleno>
        <Relleno></Relleno>
        <Relleno isSelected={turno === Turnos.O}>{Turnos.O}</Relleno>
      </section>
      <h3 className='resultado'>Gano: {winner}</h3>
    </>
  )
}

export default App
