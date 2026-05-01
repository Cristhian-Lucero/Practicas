import { Relleno } from "./Relleno"

export function Tablero ({tablero, updateTablero}) {
    return (
        <>
            {tablero.map((campo,index) => {
            return (
                <Relleno isSelected key={index} indice={index} updateTablero={updateTablero}>{campo}</Relleno>
            )
            })}
        </>
    )
}