import { Link } from 'react-router'

export function Navbar() {
  return (
    <nav>
      <Link to="/"> Home </Link>
      <Link to="/About"> - About - </Link>
      <Link to="/ToMe"> ToMe </Link>
    </nav>
  )
}
