import { getCurrentUserListCatalogue } from "../utils/mediaUtils";
import MediaCard from "./MediaCard";

const MyListCatalogue = () => {
  const catalogue = getCurrentUserListCatalogue();
  console.log(catalogue);
  return (
    <>
      {catalogue.map((media) => (
        <MediaCard key={media.id} media={media} />
      ))}
    </>
  );
};

export default MyListCatalogue;