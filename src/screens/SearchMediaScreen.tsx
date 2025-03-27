import { useEffect, useState } from "react";
import { getAllMedia, isMovie } from "../utils/mediaUtils";
import Media from "../types/Media";
import { useLocation } from "react-router-dom";
import MediaCard from "../components/MediaCard";
import MediaSection from "../components/MediaSection";

const SearchMediaScreen = () => {
  const [mediaToDisplay, setMediaToDisplay] = useState<Media[]>([]);
  const [userSearch, setUserSearch] = useState("");
  const location = useLocation();
  const { movies, series } = getAllMedia();
  const catalogue: Media[] = [...movies, ...series];

  useEffect(() => {
    const handleSearch = (search: string) => {
      let updatedMediaToDisplay = catalogue.filter((media) => {
        const titleToCompare = isMovie(media) ? media.title : media.name;
        return titleToCompare.toLowerCase().includes(search.toLowerCase());
      });
      // Add other filter criteria using updatedMediaToDisplay
      setUserSearch(search);
      setMediaToDisplay(updatedMediaToDisplay);
    };

    const queryParams = new URLSearchParams(location.search);
    const mediaToSearchParam = queryParams.get("user_search");

    if (mediaToSearchParam) {
      handleSearch(mediaToSearchParam);
    }
  }, [location]);

  return (
    <>
      {mediaToDisplay.length > 0 ? (
        <MediaSection title={`Showing results for: "${userSearch}"`}>
          {mediaToDisplay.map((media) => (
            <MediaCard key={media.id} media={media} />
          ))}
        </MediaSection>
      ) : (
        <div className="flex p-4 gap-2 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#FF0000"
            className="w-10 h-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
            />
          </svg>
          <h2 className="text-2xl font-medium">
            {`No results found for "${userSearch}".`}
          </h2>
        </div>
      )}
    </>
  );
};

export default SearchMediaScreen;