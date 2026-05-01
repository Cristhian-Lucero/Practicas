
export function Winner ({winner, resetGame}) {
    if (winner===null) return null
    const winnerText = winner === false ? 'Empate' : `Gano: ${winner}`
    return(
        <section>
          <h3>{winnerText}</h3>
          <footer>
            <button onClick={resetGame}>Empezar de nuevo</button>
          </footer>
        </section>
    )
}