import { useState } from "react"
export function TwitterFollowCard ({nombre , arroba , imagen, inicialIsFollowing}) {
  const [isFollowing ,setIsFollowing] = useState(inicialIsFollowing)

  const text = isFollowing ? 'Siguiendo' : 'Seguir'
  const buttonClassName = isFollowing ? 'seguir is-following' : 'seguir'

  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }
  return (
    <article className="datos">
      <header className="sup">
        <img src={imagen} alt="avatar" />
        <div>
          <strong>{nombre}</strong>
          <span>@{arroba}</span>
        </div>
      </header>
      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className="isFollow">{text}</span> 
          <span className="unFollow">Dejar de seguir</span>
        </button>
      </aside>
    </article>
  )
}