import Media from "../types/Media";
import { postMediaToCurrentUserListCatalogue } from "../utils/fetchUtils";
import { 
  getCurrentUserService, 
  getCurrentUserSessionIdService 
} from "./sessionStorageServices";

const addMediaToCurrentUserListCatalogueService = (media: Media) => {
  const accountId = getCurrentUserService();
  const sessionId = getCurrentUserSessionIdService();
  postMediaToCurrentUserListCatalogue(accountId, sessionId, media, true);
};

export default addMediaToCurrentUserListCatalogueService;