import SessionData from "../types/SessionData";
import UserDetails from "../types/UserDetails";

export const setSessionDataService = (sessionId: string, userDetails: UserDetails, accountId: number) => {
  const sessionData = {
    sessionId,
    userDetails,
    accountId,
  };
  sessionStorage.setItem("session_data", JSON.stringify(sessionData)); 
};

export const getSessionDataService = (): SessionData | null => {
  const sessionData = sessionStorage.getItem("session_data");
  if (sessionData) {
    return JSON.parse(sessionData);
  }
  return null;
};

export const clearSessionDataService = () => {
  sessionStorage.removeItem("session_data"); 
};