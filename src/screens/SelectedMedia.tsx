import Footer from "../components/Footer";
import playIcon from "../assets/img/play-icon.svg";
import addToMyListAIcon from "../assets/img/add-icon.svg";
import { useSelectedMedia } from "../context/SelectedMediaContext";
import logo from "../assets/img/logo.svg";
import Movie from "../types/Movie";
import Media from "../types/Media";
import { getMediaTrailer } from "../utils/mediaUtils";
import AddToMyListButton from "../components/AddToMyListButton";
import PlayButton from "../components/PlayButton";
import { useState } from "react";
import Redirect from "../components/Redirect";
import buttonBackIcon from "../assets/img/button-back-icon.svg";

const isMovie = (media: Media): media is Movie => {
  return "video" in media;
};

const SelectedMedia: React.FC = () => {
  const SELECTED_MEDIA_DETAILS_SCREEN_URL = "details";
  const { selectedMedia } = useSelectedMedia();

  if (!selectedMedia) return <></>;

  const BANNER_URL = `https://image.tmdb.org/t/p/w500${selectedMedia.backdrop_path}`;
  const [mediaTitle, mediaReleaseDate] = isMovie(selectedMedia)
    ? [selectedMedia.title, selectedMedia.release_date]
    : [selectedMedia.name, selectedMedia.first_air_date];
  const mediaReleaseYear = mediaReleaseDate.split("-")[0];
  const { data: trailer } = getMediaTrailer(selectedMedia);
  const [canRedirectToShowDetails, setCanRedirectToShowDetails] =
    useState(false);
  const [canRedirectToPreviousScreen, setCanRedirectToPreviousScreen] =
    useState(false);

  return (
    <main className="min-h-screen bg-[#080808] text-[#FFFFFF] font-family-inter mb-[7vh] overflow-hidden">
      <nav className="flex p-4 gap-3 items-center">
        <button 
          type="button" 
          className="flex items-center"
          onClick={() => setCanRedirectToPreviousScreen(true)}>
          <img src={buttonBackIcon} alt="Back" className="w-6 h-6" />
        </button>
      </nav>{" "}
      <section className="h-full w-full max-h-[30vh]">
        <img
          src={BANNER_URL}
          alt="Backdrop"
          className="max-h-[50vh] w-full h-full object-fill"
        />
      </section>
      <section className="p-2">
        <div className="flex items-center gap-2 py-1">
          <img src={logo} alt="Media Banner App logo" className="w-5 h-6" />
          <p className="text-[#FFFFFF] font-medium tracking-[0.2rem]">
            {selectedMedia.media_type.toUpperCase()}
          </p>
        </div>
        <h2 className="text-4xl font-medium py-2">{mediaTitle}</h2>
        <h3 className="text-xl font-medium mb-2">{mediaReleaseYear}</h3>
        <div className="flex flex-col gap-2 w-full justify-center py-8">
          {trailer ? (
            <PlayButton playIcon={playIcon} url={trailer} />
          ) : (
            <h3 className="text-lg font-medium mb-2 text-[#FF0000] text-center">
              Sorry, we can't play this media right now.
            </h3>
          )}
          <AddToMyListButton addToMyListIcon={addToMyListAIcon} />
        </div>
        <p>{selectedMedia.overview}</p>
        <button
          type="button"
          className="py-[40px]"
          onClick={() => setCanRedirectToShowDetails(true)}
        >
          Show more...
        </button>
        {canRedirectToPreviousScreen && <Redirect url={"../"} />}
        {canRedirectToShowDetails && (
          <Redirect url={SELECTED_MEDIA_DETAILS_SCREEN_URL} />
        )}
      </section>
      <Footer />
    </main>
  );
};

export default SelectedMedia;
