
export function Winner ({winner, resetGame}) {
    const button = <footer><button onClick={resetGame}>Empezar de nuevo</button></footer>
    if (winner===null) return button
    const winnerText = winner === false ? 'Empate' : `Gano: ${winner}`
    return(
        <section>
          <h3>{winnerText}</h3>
          {button}
        </section>
    )
}