import { 
  Suspense, 
  useEffect 
} from "react";
import { useOutletContext } from "react-router-dom";
import MediaBanner from "../components/MediaBanner";
import MediaDescription from "../components/MediaDescription";
import Media from "../types/Media";
import SplashScreen from "./SplashScreen";

const SelectedMediaScreen = () => {
  const { selectedMedia } = useOutletContext<{ selectedMedia: Media}>();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when first mounted
  }, []);

  return (
    <>
      {/*Don't know why I had to sorround it with a Suspense in order to work properly*/}
      <Suspense fallback={<SplashScreen />}>
        <MediaBanner media={selectedMedia} />
        <MediaDescription media={selectedMedia} />
      </Suspense>
    </>
  );
};

export default SelectedMediaScreen;