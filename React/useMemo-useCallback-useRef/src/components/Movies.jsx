const ListOfMovies = ({ movies }) => {
  return (
    <>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <h3>{movie.title}</h3>
            <p>{movie.year}</p>
            <img src={movie.poster} alt={movie.title} />
          </li>
        ))}
      </ul>
    </>
  )
}

const NoMoviesResult = () => {
  return (
    <>
      <p>No hay resultados</p>
    </>
  )
}

export const Movies = ({ movies }) => {
  const hasMovies = movies?.lenght > 0
  return hasMovies ? ListOfMovies({ movies }) : NoMoviesResult()
}
