import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Artworks from "./pages/Artworks";
import { QueryClient, QueryClientProvider } from "react-query";
import ThemeProviderWrapper from "./components/ThemeProviderWrapper";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const queryClient = new QueryClient();
root.render(
  <React.StrictMode>
    <ThemeProviderWrapper>
      <QueryClientProvider client={queryClient}>
        <Artworks />
      </QueryClientProvider>
    </ThemeProviderWrapper>
  </React.StrictMode>
);

reportWebVitals();
