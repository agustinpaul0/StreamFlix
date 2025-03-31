import { motion } from "framer-motion";
import { useSelectedMedia } from "../context/SelectedMediaContext";
import addMediaToCurrentUserListCatalogueService from "../services/addMediaToCurrentUserListCatalogueService";
import addToMyListIcon from "../assets/img/add-icon-2.svg";
import removeFromMyListIcon from "../assets/img/remove-icon.svg";
import { 
  useState, 
  useMemo 
} from "react";
import Media from "../types/Media";
import removeMediaFromCurrentUserListCatalogueService from "../services/removeMediaFromCurrentUserListCatalogueService";
import { useMyListCatalogue } from "../context/MyListCatalogueContext";
import { getCurrentUserListCatalogue } from "../utils/mediaUtils";
import LoadingModal from "./LoadingModal";

const MyListButton = () => {
  const { myListCatalogue, setMyListCatalogue } = useMyListCatalogue();
  const { selectedMedia } = useSelectedMedia();
  const [showLoadingModal, setShowLoadingModal] = useState(false);

  const selectedMediaIsInMyList = useMemo(() => {
    if (selectedMedia) {
      return myListCatalogue.some((media) => media.id === selectedMedia.id);
    }
    return false;
  }, [myListCatalogue, selectedMedia]);

  const handleClick = async (media: Media) => {
    try {
      setShowLoadingModal(true);

      selectedMediaIsInMyList
        ? await removeMediaFromCurrentUserListCatalogueService(media)
        : await addMediaToCurrentUserListCatalogueService(media);

      const updatedCatalogue = await getCurrentUserListCatalogue();
      setMyListCatalogue(updatedCatalogue);
    } catch (error) {
      console.error("Error in handleClick:", error);
      throw error;
    } finally {
      setShowLoadingModal(false);
    }
  };

  return (
    <>
      {showLoadingModal ? (
        <div
          className="fixed inset-0 flex justify-center items-center z-50"
          style={{ backgroundColor: "rgba(8, 8, 8, 0.8)" }}
        >
          <LoadingModal />
        </div>
      ) : (
        selectedMedia && (
          <motion.button
            type="button"
            onClick={() => handleClick(selectedMedia)}
            className="relative p-4 text-[#FFFFFF] rounded-md overflow-hidden cursor-pointer flex flex-1 items-center justify-center"
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-[#868181] opacity-75 rounded-md"></div>
            <span className="inline-flex items-center gap-3 relative text-xl font-medium">
              {selectedMediaIsInMyList ? (
                <img
                  src={removeFromMyListIcon}
                  alt="Remove From My List Icon"
                  className="w-7 h-6.5"
                />
              ) : (
                <img
                  src={addToMyListIcon}
                  alt="Add To My List Icon"
                  className="w-7 h-7"
                />
              )}
              My List
            </span>
          </motion.button>
        )
      )}
    </>
  );
};

export default MyListButton;