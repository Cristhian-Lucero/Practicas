import { WINNER_COMBOS } from "../constanst"
export const checkWinner = (chequearTablero) => {
    // comprobamos si alguien ya gano
    for (const combo of WINNER_COMBOS) {
      const [a,b,c] = combo
      if (chequearTablero[a] && chequearTablero[a] === chequearTablero[b] && chequearTablero[a] === chequearTablero[c]){
        return chequearTablero[a]
      }
    }
    // si nadie gano
    return false
}
export const checkEndGame = (newTablero) => {
    return newTablero.every((posicion)=>posicion!==null)
}