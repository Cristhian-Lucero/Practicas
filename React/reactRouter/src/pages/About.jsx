import { useNavigate } from 'react-router'

export function About() {
  const navigate = useNavigate()
  return (
    <body>
      <h1>ABOUT</h1>
      <button onClick={() => navigate('/ToMe')}> ToMe </button>
    </body>
  )
}
