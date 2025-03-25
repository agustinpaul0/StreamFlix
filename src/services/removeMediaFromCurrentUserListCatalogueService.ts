import Media from "../types/Media";
import { postMediaToCurrentUserListCatalogue } from "../utils/fetchUtils";
import { 
  getCurrentUserAccountIdService, 
  getCurrentUserSessionIdService 
} from "./sessionStorageServices";

const removeMediaFromCurrentUserListCatalogueService = async (media: Media) => {
  const accountId = getCurrentUserAccountIdService();
  const sessionId = getCurrentUserSessionIdService();
  await postMediaToCurrentUserListCatalogue(accountId, sessionId, media, false);
};

export default removeMediaFromCurrentUserListCatalogueService;