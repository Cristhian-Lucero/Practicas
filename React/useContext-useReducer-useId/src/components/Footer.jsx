import './Footer.css'
export function Footer({ filtro }) {
  return (
    <footer className="footer">
      <h4>{JSON.stringify(filtro)}</h4>
    </footer>
  )
}
