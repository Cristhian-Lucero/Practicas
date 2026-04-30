import { useState } from "react"
export function TwitterFollowCard ({nombre , arroba , imagen}) {
  const [isFollowing ,setIsFollowing] = useState(false)

  const text = isFollowing ? 'Siguiendo' : 'Seguir'
  const buttonClassName = isFollowing ? 'seguir is-following' : 'seguir'
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
        <button className={buttonClassName}>
          {text}
        </button>
      </aside>
    </article>
  )
}