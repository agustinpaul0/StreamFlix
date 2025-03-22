import Media from "../types/Media";
import MediaCard from "./MediaCard";

const MyListCatalogue = ( { catalogue }: {catalogue: Media[]} ) => {
  return (
    <>
      {catalogue.map((media) => (
        <MediaCard key={media.id} media={media} />
      ))}
    </>
  );
};

export default MyListCatalogue;