import { useState } from "react"

export function useMovies() {
  const [movies, setMovies] = useState()
  const mapMovies = movies?.map((movie) => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.year,
    poster: movie.Poster,
  }))
  return { movies: mapMovies }
}