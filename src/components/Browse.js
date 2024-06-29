import Header from "./Header";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SeondaryContainer from "./SeondaryContainer";

const Browse = () => {
  useNowPlayingMovies();

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
