import { NextUIProvider } from "@nextui-org/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";
import "./index.css";
import { store } from "./redux/store";
import router from "./routes/routes";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <NextUIProvider>
      <React.StrictMode>
        <Provider store={store}>
          <Toaster
            visibleToasts={10}
            richColors={true}
            toastOptions={{
              style: {
                background: "mediumseagreen",
                color: "white",
                fontSize: "16px",
                padding: "16px",
                borderRadius: "6px",
              },
            }}
          />
          <RouterProvider router={router} />
          <SpeedInsights />
        </Provider>
      </React.StrictMode>
    </NextUIProvider>
  </HelmetProvider>
);
