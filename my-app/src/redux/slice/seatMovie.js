import { createSlice } from "@reduxjs/toolkit";
import { dataSeat } from "../../data/dataSeat";
const initialState = {
  seat: dataSeat,
  status: "false",
};

const seatMovie = createSlice({
  name: "seatMovie",
  initialState,
  reducers: {
    thayDoiTrangThai: (state, action) => {
      // console.log(action.payload);
      // console.log(state.seat.danhSachGhe);
      // console.log(state.status);
      // state.seat.danhSachGhe.daDat = "true";
      state.status = true;
      console.log(state.seat.danhSachGhe);
      console.log(state.status);
      console.log(action);
    },
  },
});

export const { updateSeat, thayDoiTrangThai } = seatMovie.actions;

export default seatMovie.reducer;
