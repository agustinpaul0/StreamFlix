import Media from "../types/Media";
import { postMediaToCurrentUserListCatalogue } from "../utils/fetchUtils";
import { 
  getCurrentUserAccountIdService, 
  getCurrentUserSessionIdService 
} from "./sessionStorageServices";

const addMediaToCurrentUserListCatalogueService = async (media: Media) => {
  const accountId = getCurrentUserAccountIdService();
  const sessionId = getCurrentUserSessionIdService();
  await postMediaToCurrentUserListCatalogue(accountId, sessionId, media, true);
};

export default addMediaToCurrentUserListCatalogueService;