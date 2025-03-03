import { configureStore } from "@reduxjs/toolkit";
import favorite from "./reducers/favorite";

export default configureStore({
  reducer: {
    favorite,
  },
});
