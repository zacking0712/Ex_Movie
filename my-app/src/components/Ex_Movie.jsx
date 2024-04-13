import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { thayDoiTrangThai, updateSeat } from "../redux/slice/seatMovie";

import Seat from "./Seat.jsx";
import InfoSeat from "./InfoSeat.jsx";
const Ex_Movie = () => {
  // const [status, setStatus] = useState({});
  const dispatch = useDispatch();
  // Dạ đây chị
  // const dataSeats = useSelector((state) => state.seatMovie.seat);

  const handleClickSeat = (hang, ghe, status) => {
    dispatch(
      thayDoiTrangThai({
        hang: hang,
        ghe: ghe,
        status: status,
      })
    );
    // console.log(arrDSGhe[viTri].daDat);
  };
  return (
    <div className="movieBooking flex justify-around items-center mt-28">
      {/* Seat */}
      <Seat handleClickSeat={handleClickSeat} />
      {/* InfoSeat */}
      <InfoSeat />
    </div>
  );
};

export default Ex_Movie;
