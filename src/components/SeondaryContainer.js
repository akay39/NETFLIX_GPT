import { useSelector } from "react-redux";
import MovieList from "./MovieList";


const SeondaryContainer = () => {

const movies = useSelector((store)=> store.movies)

  return movies.nowPlayingMovies &&(
    <div className=" bg-black">
      <div className="-mt-56 relative z-20 pl-12">
        <MovieList title ={"Now Playing"} movies={movies.nowPlayingMovies}/>
      
      <MovieList title ={"Popular"} movies={movies.popularMovies}/>
      <MovieList title ={"Top Rated"} movies={movies.topRatedMovies}/>
      <MovieList title ={"Upcoming"} movies={movies.upcomingMovies}/>
      <MovieList title ={"Horror"} movies={movies.nowPlayingMovies}/>
      </div>
     
      
      
      </div>
  )
}

export default SeondaryContainer;

