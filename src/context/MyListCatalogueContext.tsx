import { 
  createContext, 
  ReactNode, 
  useContext, 
  useState 
} from "react";
import Media from "../types/Media";
import MyListCatalogueContextInterface from "../types/MyListCatalogueContextInterface";

const MyListCatalogueContext = createContext<MyListCatalogueContextInterface | null>(null);

export const MyListCatalogueContextProvider = ({ children }: { children: ReactNode }) => {
  const [myListCatalogue, setMyListCatalogue] = useState<Media[]>([]);

  return (
    <MyListCatalogueContext.Provider value={{ myListCatalogue, setMyListCatalogue }}>
      {children}
    </MyListCatalogueContext.Provider>
  );
};

export const useMyListCatalogue = (): MyListCatalogueContextInterface => {
  const context = useContext(MyListCatalogueContext);
  if (!context) {
    throw new Error("useMyListCatalogue must be used within a MyListCatalogueContextProvider");
  }
  return context;
};