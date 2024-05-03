import { NextUIProvider } from "@nextui-org/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { store } from "./redux/store";
import router from "./routes/routes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <NextUIProvider>
      <React.StrictMode>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </React.StrictMode>
    </NextUIProvider>
  </HelmetProvider>
);
