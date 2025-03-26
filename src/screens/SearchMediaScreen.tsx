import { 
  useEffect, 
  useState 
} from "react";
import { 
  getAllMedia, 
  isMovie 
} from "../utils/mediaUtils";
import Media from "../types/Media";
import { useLocation } from "react-router-dom";
import MediaCard from "../components/MediaCard";
import MediaSection from "../components/MediaSection";

const SearchMedia = () => {
  const [mediaToDisplay, setMediaToDisplay] = useState<Media[]>([]);
  const location = useLocation();
  const { movies, series } = getAllMedia();
  const catalogue: Media[] = [...movies, ...series];

  useEffect(() => {
    const handleSearch = (mediaToSearch: string) => {
      setMediaToDisplay(catalogue.filter((media) => {
        const titleToCompare = isMovie(media) ? media.title : media.name;
        return titleToCompare.toLowerCase().includes(mediaToSearch.toLowerCase());
      }));
    };

    const queryParams = new URLSearchParams(location.search);
    const mediaToSearchParam = queryParams.get("media_to_search");

    if(mediaToSearchParam) {
      handleSearch(mediaToSearchParam);
    }
  }, [location]);

  return (
    <>
      {mediaToDisplay.length > 0 ? (
        <MediaSection title={"Your Search"}>
          {mediaToDisplay.map((media) => (
            <MediaCard key={media.id} media={media} />
          ))}
        </MediaSection>
      ) : (
        <div className="w-screen h-screen">
          <h1>
            No Media found
          </h1>
        </div>
      )}
    </>
  );
}

export default SearchMedia;