import HeaderSection from "../components/HeaderSection";
import MediaSection from "../components/MediaSection";
import Catalogue from "../components/Catalogue";
import MoviesCatalogue from "../components/MoviesCatalogue";
import SeriesCatalogue from "../components/SeriesCatalogue";
import PopularMedia from "../components/PopularMedia";
import PopularCatalogue from "../components/PopularCatalogue";
import MyListCatalogue from "../components/MyListCatalogue";
import { useMyListCatalogue } from "../context/MyListCatalogueContext";
import { getCurrentUserListCatalogue } from "../utils/mediaUtils";
import { useEffect } from "react";

const HomeScreen = () => {

  const { myListCatalogue, setMyListCatalogue } = useMyListCatalogue();
  const initialMyListCatalogue = getCurrentUserListCatalogue();

  console.log(myListCatalogue);
  
  useEffect(() => {
    const storedCatalogue = localStorage.getItem("my_list_catalogue");
    
    if (storedCatalogue) {
      setMyListCatalogue(JSON.parse(storedCatalogue));
    } else {
      setMyListCatalogue(initialMyListCatalogue);
      localStorage.setItem("my_list_catalogue", JSON.stringify(initialMyListCatalogue));
    }

    const handleStorageChange = () => {
      const updatedCatalogue = localStorage.getItem("my_list_catalogue");
      if (updatedCatalogue) {
        setMyListCatalogue(JSON.parse(updatedCatalogue));
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []); 


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
      {myListCatalogue.length > 0 && (
        <MediaSection title="My List">
          <MyListCatalogue catalogue={myListCatalogue} />
        </MediaSection>
      )}
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