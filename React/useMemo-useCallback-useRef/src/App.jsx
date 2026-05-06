import './App.css'
import { useEffect, useRef, useState } from 'react'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'

const datosURL = 'https://www.omdbapi.com/?apikey=4287ad07&s='

function App() {
  const { movies } = useMovies()
  const inputRef = useRef()

  const handleSubmit = (event) => {
    event.preventDefault() // evita enviar nada(?
    const value = inputRef.current.value
  }
  return (
    <>
      <div className="page">
        <header>
          <h1>Buscador de Películas</h1>
          <form className="form" onSubmit={handleSubmit}>
            <input ref={inputRef} placeholder="Avengers, Matrix ..." />
            <button className="boton" type="submit">
              Buscar
            </button>
          </form>
        </header>
        <main>
          <Movies movies={movies} />
        </main>
      </div>
    </>
  )
}

export default App
