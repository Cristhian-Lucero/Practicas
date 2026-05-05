import './App.css'
import { useImage } from './hooks/useImage'
import { useRecargar } from './hooks/useRecargar'

function App() {
  const { frase, recargar } = useRecargar()
  const { imagen } = useImage(frase)

  return (
    <>
      <main>
        <button onClick={recargar}>Nuevo gato</button>
        {frase && <p>{frase}</p>}
        {imagen && (
          <img className="imagen" src={imagen} alt="Imagen no disponible"></img>
        )}
      </main>
    </>
  )
}

export default App
