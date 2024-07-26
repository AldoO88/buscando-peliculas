function ListOfMovies ({ movies }) {
  return (
    <ul className='movies'>
      {
        movies.map(movie => (
          <li key={movie.id} className='movie'>
            <h3>{movie.title}</h3>
            <p>{movie.year}</p>
            <img src={movie.image} alt={movie.title} />
          </li>
        ))
      }
    </ul>
  )
}

function NoMoviesResults () {
  return <p>No se han encontrado resultados</p>
}

export const Movies = ({ movies }) => { 
    const hasMovies = movies?.length > 0
  
    return (
        hasMovies
        ? <ListOfMovies movies={movies} />
        : <NoMoviesResults />
    )
 }