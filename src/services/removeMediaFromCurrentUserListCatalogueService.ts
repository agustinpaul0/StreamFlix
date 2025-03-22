import Media from "../types/Media";
import { postMediaToCurrentUserListCatalogue } from "../utils/fetchUtils";
import { getCurrentUserService, getCurrentUserSessionIdService } from "./sessionStorageServices";

const removeMediaFromCurrentUserListCatalogueService = (media: Media) => {
  const accountId = getCurrentUserService();
  const sessionId = getCurrentUserSessionIdService();
  postMediaToCurrentUserListCatalogue(accountId, sessionId, media, false);
}

export default removeMediaFromCurrentUserListCatalogueService;