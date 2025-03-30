import MediaSection from "../components/MediaSection";
import MyListCatalogue from "../components/MyListCatalogue";
import { useMyListCatalogue } from "../context/MyListCatalogueContext";

const MyListScreen = () => {
  const { myListCatalogue } = useMyListCatalogue();

  return (
    <>
      <MediaSection title={"My List"}>
        <div className="grid grid-cols-2 gap-2">
          <MyListCatalogue catalogue={myListCatalogue} />
        </div>
      </MediaSection>
    </>
  );
}

export default MyListScreen;