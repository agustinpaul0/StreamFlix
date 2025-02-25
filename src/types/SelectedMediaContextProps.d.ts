import Media from "./Media";

export default interface SelectedMediaContextProps {
  selectedMedia: Media;
  canRedirectToShowDetails: boolean;
  canRedirectToPreviousScreen: boolean;
  setCanRedirectToShowDetails: (value: boolean) => void;
  setCanRedirectToPreviousScreen: (value: boolean) => void;
  SELECTED_MEDIA_DETAILS_SCREEN_URL: string;
}