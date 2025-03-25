export const setCurrentUserService = (id: number) => {
  sessionStorage.setItem("current_user", JSON.stringify(id)); 
};

export const getCurrentUserAccountIdService = (): number => {
  const currentUserData = sessionStorage.getItem("current_user");
  if (currentUserData) {
    return JSON.parse(currentUserData);
  }
  return -1;
};

export const clearCurrentUserService = () => {
  sessionStorage.removeItem("current_user"); 
};

export const setCurrentUserSessionIdService = (sessionId: string) => {
  //Use JSON.stringify for defensive programming purposes
  sessionStorage.setItem("session_id", JSON.stringify(sessionId));
};

export const getCurrentUserSessionIdService = () => {
  const currentUserSessionId = sessionStorage.getItem("session_id");
  if(currentUserSessionId) {
    //Use JSON.parse for defensive programming purposes
    return JSON.parse(currentUserSessionId);
  }
  return -1;
};