export const setCurrentUserService = (id: number) => {
  sessionStorage.setItem("current_user", JSON.stringify(id)); 
};

export const getCurrentUserService = (): number => {
  const currentUserData = sessionStorage.getItem("current_user");
  if (currentUserData) {
    return JSON.parse(currentUserData);
  }
  return -1;
};

export const clearCurrentUserService = () => {
  sessionStorage.removeItem("current_user"); 
};