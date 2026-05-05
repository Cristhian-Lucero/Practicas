import './App.css'
import { TwitterFollowCard } from "./TwitterFollowCard"
export default function App () {
  return (
    <>
      <TwitterFollowCard inicialIsFollowing nombre="Tedro" arroba="Tedro" imagen="https://cdn-icons-png.flaticon.com/128/1903/1903496.png" />
      <TwitterFollowCard nombre="Pepe" arroba="Pepe" imagen="https://cdn-icons-png.flaticon.com/128/6062/6062646.png" />
    </>
  )
}