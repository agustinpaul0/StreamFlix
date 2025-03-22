import HeaderSection from "../components/HeaderSection";
import MediaSection from "../components/MediaSection";
import Catalogue from "../components/Catalogue";
import MoviesCatalogue from "../components/MoviesCatalogue";
import SeriesCatalogue from "../components/SeriesCatalogue";
import PopularMedia from "../components/PopularMedia";
import PopularCatalogue from "../components/PopularCatalogue";
import MyListCatalogue from "../components/MyListCatalogue";
import { useEffect, useState } from "react";
import { getCurrentUserListCatalogue } from "../utils/mediaUtils";
import Media from "../types/Media";

const HomeScreen = () => {
  const [userList, setUserList] = useState<Media[] | null>(null);

  /*
  useEffect(() => {
    const currentUserList = getCurrentUserListCatalogue();
    if (currentUserList.length > 0) {
      setUserList(currentUserList);
    }
  }, []);*/

  return (
    <>
      <HeaderSection />
      <PopularMedia />
      <MediaSection title="Catalogue">
        <Catalogue />
      </MediaSection>
      <MediaSection title="Popular">
        <PopularCatalogue />
      </MediaSection>
      {userList && 
        <MediaSection title="My List">
          <MyListCatalogue />
        </MediaSection>}
      <MediaSection title="Movies">
        <MoviesCatalogue />
      </MediaSection>
      <MediaSection title="Series">
        <SeriesCatalogue />
      </MediaSection>
    </>
  );
};

export default HomeScreen;