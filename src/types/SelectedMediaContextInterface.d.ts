import Media from "./Media";

export default interface SelectedMediaContextInterface {
  selectedMedia: Media | null; 
  setSelectedMedia: (newSelectedMedia: Media) => void; 
}