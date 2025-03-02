import React from "react";
import "./App.css";
import { RouterProvider } from "react-router";
import { routes } from "./routes";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>
  );
}

export default App;
