import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { thayDoiTrangThai, updateSeat } from "../redux/slice/seatMovie";
import { dataSeat } from "../data/dataSeat.js";
import Seat from "./Seat.jsx";
import InfoSeat from "./InfoSeat.jsx";
const Ex_Movie = () => {
  const [status, setStatus] = useState({});
  const dispatch = useDispatch();
  const dataSeats = useSelector((state) => state.seatMovie.seat);
  console.log(dataSeats);
  useEffect(() => {
    dispatch(updateSeat(dataSeat));
  }, []);

  const handleClickSeat = (soGhe, status) => {
    const arrDSGhe = dataSeats.map((item, index) => {
      return item.danhSachGhe;
    });
    const arr = arrDSGhe.map((item, index) => {
      return item.hang;
    });
    console.log(arr);
  };
  return (
    <div className="movieBooking">
      {/* Seat */}
      <Seat handleClickSeat={handleClickSeat} status={status} />
      {/* InfoSeat */}
      <InfoSeat />
    </div>
  );
};

export default Ex_Movie;
