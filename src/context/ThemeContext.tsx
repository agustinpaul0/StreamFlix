import { 
  createContext, 
  useContext, 
  ReactNode, 
  useState 
} from "react";

interface ThemeContextType {
  value: boolean; 
  toggle: () => void;  
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [value, setValue] = useState(false); 

  const toggle = () => setValue(prev => !prev);

  return (
    <ThemeContext.Provider value={{ value, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}