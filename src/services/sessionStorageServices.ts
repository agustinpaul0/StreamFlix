import UserDetails from "../types/UserDetails";

export const saveSessionData = (sessionId: string, userDetails: UserDetails, accountId: number) => {
  const sessionData = {
    sessionId,
    userDetails,
    accountId,
  };
  sessionStorage.setItem("session_data", JSON.stringify(sessionData)); 
};

export const getSessionData = (): { sessionId: string | null, userDetails: UserDetails | null, accountId: number | null } => {
  const sessionData = sessionStorage.getItem("session_data");
  if (sessionData) {
    return JSON.parse(sessionData);
  }
  return { sessionId: null, userDetails: null, accountId: null };
};

export const clearSessionData = () => {
  sessionStorage.removeItem("session_data"); 
};