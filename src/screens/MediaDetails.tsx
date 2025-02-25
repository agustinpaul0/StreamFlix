import { useOutletContext } from "react-router-dom";
import Redirect from "../components/Redirect";
import SelectedMediaContextProps from "../types/SelectedMediaContextProps";

const MediaDetails = () => {
  const { canRedirectToPreviousScreen } = useOutletContext<SelectedMediaContextProps>();

  return (
    <>
      {canRedirectToPreviousScreen && <Redirect url={"../"} />}
    </>
  );
};

export default MediaDetails;
