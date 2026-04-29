export function TwitterFollowCard ({nombre , arroba , imagen}) {
    return (
        <article>
      <header>
        <img src={imagen} alt="avatar" />
        <div>
          <strong>{nombre}</strong>
          <span>@{arroba}</span>
        </div>
      </header>

      <aside>
        <button>
          Seguir
        </button>
      </aside>
    </article>
    )
}