import Media from "../types/Media";
import User from "../types/User";

export const addUserToLocalStorageService = ({ id, username, name }: User) => {
  localStorage.setItem(`user_${id}`, JSON.stringify({
    id,
    username,
    name
  }));
};

export const getUserFromLocalStorageService = (userId: number): User => {
  const user: string | null = localStorage.getItem(`user_${userId}`);
  return user ? JSON.parse(user) : { id: 0, username: "", name: "" };
};

export const removeUserFromLocalStorageService = (id: number) => {
  localStorage.removeItem(`user_${id}`);
};

export const getAllUsersFromLocalStorageService = () => {
  const items = new Map<string, User>();

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (!key || key === "darkMode") continue;
    const value = localStorage.getItem(key);
    if (!value) continue;
    items.set(key, JSON.parse(value));
  }

  return items;
};

export const isUserMyListCatalogueService = () => {
  return localStorage.getItem("my_list_catalogue") !== null;
};

export const getUserMyListCatalogueService = (): Media[] | null => {
  const userMyListCatalogue: string | null = localStorage.getItem("my_list_catalogue");
  return userMyListCatalogue ? JSON.parse(userMyListCatalogue) : null;
}

export const setUserMyListCatalogueService = (myListCatalogue: Media[]) => {
  localStorage.setItem("my_list_catalogue", JSON.stringify(myListCatalogue));
};