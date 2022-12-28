// routing
import Routes from "./routes";

// React Query
import { QueryClient, QueryClientProvider } from "react-query";

// context import
import { LanguageProvider } from "./contexts/LanguageContext";
import { PopupProvider } from "./contexts/PopupContext";

const queryClient = new QueryClient();

const App = () => (
  <LanguageProvider>
    <PopupProvider>
      <QueryClientProvider client={queryClient}>
          <Routes />
      </QueryClientProvider>
    </PopupProvider>
  </LanguageProvider>
);

export default App;
