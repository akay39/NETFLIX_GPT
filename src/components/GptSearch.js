import { BG_LOGO } from "../utils/Constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
  return (
    <div>
      <div>
        <img
          className="absolute -z-10"
          src={BG_LOGO}
          alt="backgound-logo"
        />
      </div>
      <GptSearchBar />

      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
