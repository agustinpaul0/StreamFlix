import { 
  createContext, 
  useContext, 
  useState, 
  ReactNode 
} from "react";
import Media from "../types/Media";
import SelectedMediaContextInterface from "../types/SelectedMediaContextInterface";

const SelectedMediaContext = createContext<SelectedMediaContextInterface | null>(null);

export const SelectedMediaContextProvider = ({ children }: { children: ReactNode }) => {
  const [selectedMedia, setSelectedMedia] = useState<Media | null>(null);

  return (
    <SelectedMediaContext.Provider value={{ selectedMedia, setSelectedMedia }}>
      {children}
    </SelectedMediaContext.Provider>
  );
};

export const useSelectedMedia = (): SelectedMediaContextInterface => {
  const context = useContext(SelectedMediaContext);
  if (!context) {
    throw new Error("useSelectedMedia must be used within a SelectedMediaContextProvider");
  }
  return context;
};