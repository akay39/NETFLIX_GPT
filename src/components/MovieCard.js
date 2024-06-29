import { IMG_CDN_URL } from "../utils/Constants"


const MovieCard = ({posterPath}) => {
  return (
    <div className="w-36 pr-2">
        <img src={IMG_CDN_URL + posterPath} alt="Movie Card" />
    </div>
  )
}

export default MovieCard