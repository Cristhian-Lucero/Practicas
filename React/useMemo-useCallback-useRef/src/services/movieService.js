import noResults from "../mooks/noResults.json"

const datosURL = 'https://www.omdbapi.com/?apikey=4287ad07&s='

// Normaliza en un solo sitio por si cambia como vienen los datos
export const movieService = async ({buscar}) => {
    if (buscar==='') return null

    try {
        const data = await fetch(`${datosURL}${buscar}`)
        if (data.ok){
            const res = await data.json()
            const movies = res.Search
            return movies?.map((movie) => ({
                id: movie.imdbID,
                title: movie.Title,
                year: movie.Year,
                poster: movie.Poster,
            }))
            
        }else{
            return noResults
        }
        
    } catch (error) {
        throw new Error('Error al buscar pelicula', { cause: error })
    }

    
}