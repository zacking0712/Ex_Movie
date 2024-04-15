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
      // Tạo bản sao và thay đổi giá trị cần thiết
      state.seat = state.seat.map((hangGhe) => {
        if (action.payload.hang == hangGhe.hang) {
          return {
            ...hangGhe,
            danhSachGhe: hangGhe.danhSachGhe.map((ghe) => {
              if (ghe.soGhe == action.payload.ghe.soGhe) {
                return !ghe.daDat
                  ? { ...ghe, daDat: true }
                  : { ...ghe, daDat: false };
              } else {
                return ghe;
              }
            }),
          };
        } else {
          return hangGhe;
        }
      });
    },
  },
});

export const { updateSeat, thayDoiTrangThai } = seatMovie.actions;

export default seatMovie.reducer;
