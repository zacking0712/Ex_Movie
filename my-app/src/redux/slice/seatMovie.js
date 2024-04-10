import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  seat: [],
};

const seatMovie = createSlice({
  name: "seatMovie",
  initialState,
  reducers: {
    updateSeat(state, action) {
      state.seat = action.payload;
      console.log(state.seat);
    },
  },
});

export const { updateSeat, thayDoiTrangThai } = seatMovie.actions;

export default seatMovie.reducer;
