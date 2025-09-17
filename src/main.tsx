import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { AppRouter } from "@/app/providers/router/index.tsx";
import { ThemeProvider } from "@/shared/lib/theme";
import { Provider } from "react-redux";
import { store } from "@/app/providers/store";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <AppRouter />
      </ThemeProvider>
    </Provider>
  </StrictMode>
);
