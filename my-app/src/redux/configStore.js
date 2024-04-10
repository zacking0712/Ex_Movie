import { configureStore } from "@reduxjs/toolkit";
import seatMovie from "./slice/seatMovie";

export const store = configureStore({
  reducer: {
    // nguoiDung: () => {
    //   return "Khoa";
    // },
    seatMovie,
  },
});
