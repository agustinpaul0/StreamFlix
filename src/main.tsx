import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { 
  QueryClient, 
  QueryClientProvider 
} from "@tanstack/react-query"; 
import App from "./App";
import { SelectedMediaContextProvider } from "./context/SelectedMediaContext";
import { MyListCatalogueContextProvider } from "./context/MyListCatalogueContext";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <MyListCatalogueContextProvider>
        <SelectedMediaContextProvider>
          <App />
        </SelectedMediaContextProvider>
      </MyListCatalogueContextProvider>
    </QueryClientProvider>
  </BrowserRouter>
);