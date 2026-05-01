export const saveGameToStorage = ({newTablero,newTurno}) => {
    localStorage.setItem('estadoTablero', JSON.stringify(newTablero))
    localStorage.setItem('estadoTurno', newTurno)
}
export const resetGameToStorage = () => {
    localStorage.removeItem('estadoTablero')
    localStorage.removeItem('estadoTurno')
}