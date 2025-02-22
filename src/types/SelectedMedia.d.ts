import Media from "./Media";

export default interface SelectedMedia {
  selectedMedia: Media | null; 
  setSelectedMedia: (newSelectedMedia: Media) => void; 
}