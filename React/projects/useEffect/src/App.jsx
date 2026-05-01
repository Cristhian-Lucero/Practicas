import { FollowMouse } from './components/FollowMouse'
import './App.css'
import { useState } from 'react'

function App() {
  const [destruir, setDestruir] = useState(false)
  return (
    <>
      <main>
        {destruir && <FollowMouse />}
        <section>
          <button
            onClick={() => {
              setDestruir(!destruir)
            }}
          >
            {destruir ? 'Destruir' : 'Construir'}
          </button>
        </section>
      </main>
    </>
  )
}

export default App
