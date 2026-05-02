import { useEffect, useState } from 'react'
import './App.css'

const textoURL = 'https://catfact.ninja/fact'
const imagenURL = `https://cataas.com/cat/says/`

function App() {
  const [frase, setFrase] = useState()
  const [imagen, setImagen] = useState()

  useEffect(() => {
    fetch(textoURL)
      .then((res) => res.json())
      .then((data) => {
        const { fact } = data
        setFrase(fact)
        console.log(fact)
      })
  }, [])

  useEffect(() => {
    if (!frase) return
    const firstWord = frase.split(' ', 1).join('')
    fetch(`${imagenURL}${firstWord}`).then((response) => {
      setImagen(response.url)
    })
  }, [frase])

  return (
    <>
      <main>
        {frase && <h2>{frase}</h2>}
        {imagen && <img src={imagen} alt="Imagen no disponible"></img>}
      </main>
    </>
  )
}

export default App
