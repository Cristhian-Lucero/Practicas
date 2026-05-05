import { useState, useEffect } from 'react'

export function FollowMouse() {
  const [activar, setActicar] = useState(false)
  const [cursor, setCursor] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const moverCursor = (event) => {
      const { clientX, clientY } = event
      setCursor({ x: clientX, y: clientY })
    }
    if (activar) {
      addEventListener('pointermove', moverCursor)
    }
    // limpia el efecto anterior cuando escucha un cambio en algun elemento del useEffect
    return () => {
      removeEventListener('pointermove', moverCursor)
    }
  }, [activar])

  return (
    <>
      <div
        className="bola"
        style={{ transform: `translate(${cursor.x}px,${cursor.y}px)` }}
      ></div>
      <h1>UseEffect</h1>
      <h3>
        X:{cursor.x}, Y:{cursor.y}
      </h3>
      <button
        onClick={() => {
          setActicar(!activar)
        }}
      >
        {activar ? 'Desactivar' : 'Acticar'} seguir Puntero
      </button>
    </>
  )
}
