import { createContext, useContext, useState, ReactNode } from "react";
import RedirectContextType from "../types/RedirectContext";

const RedirectContext = createContext<RedirectContextType | undefined>(undefined);

export const RedirectProvider = ({ children }: { children: ReactNode }) => {
  const [redirectUrl, setRedirectUrl] = useState<string | null>(null);

  return (
    <RedirectContext.Provider value={{ redirectUrl, setRedirectUrl }}>
      {children}
    </RedirectContext.Provider>
  );
};

export const useRedirect = () => {
  const context = useContext(RedirectContext);
  if (!context) {
    throw new Error("useRedirect must be used within a RedirectProvider");
  }
  return context;
};
