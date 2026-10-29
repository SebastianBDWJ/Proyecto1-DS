import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "./styles/variables.css";
import "./styles/base.css";
import App from "./app/App.tsx";
import { FavoritesProvider } from "./features/favorites/context/FavoritesContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
       <FavoritesProvider>
        <App />
      </FavoritesProvider>
    </BrowserRouter>
  </StrictMode>,
);
