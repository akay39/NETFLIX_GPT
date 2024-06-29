import Header from "./Header";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SeondaryContainer from "./SeondaryContainer";
import usePopularMovies from "../Hooks/usePopularMovies";
import useTopRatedMovies from "../Hooks/useTopRatedMovies";
import useUpcomingMovies from "../Hooks/useUpcomingMovies";


const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  

  return (
    <div>
      <Header />
      <MainContainer/>
      <SeondaryContainer/>
    
      {/*
        Main container
          - VideoBackground
          - Video Title
        SecondaryCOntainer
          - MoviesList * n
            - cards * n
       
       */}
    </div>
  );
};

export default Browse;
