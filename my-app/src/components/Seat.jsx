import React from "react";
import { dataSeat } from "../data/dataSeat";
import { useDispatch, useSelector } from "react-redux";
import { thayDoiTrangThai } from "../redux/slice/seatMovie";

const Seat = ({ handleClickSeat }) => {
  const dispatch = useDispatch();
  const { seat, status } = useSelector((reducer) => reducer.seatMovie);
  // console.log(dataRedux);
  return (
    <div>
      <table className="text-yellow-500 text-3xl">
        <thead className="mb-5">
          <tr>
            {seat[0].danhSachGhe.map((seat, index) => {
              return <th key={index}>{seat.soGhe}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {seat.map((seat, index) => {
            if (index > 0) {
              return (
                <tr key={index}>
                  {seat.danhSachGhe.map((item, index) => {
                    // console.log(index);
                    // console.log(item);
                    return (
                      <td
                        onClick={() => {
                          handleClickSeat(seat.hang, item, item.daDat);
                        }}
                        className="bg-yellow-700 cursor-pointer p-3 text-xl border-2 border-solid border-red-500"
                        key={index}
                      >
                        {item.soGhe}
                      </td>
                    );
                  })}
                </tr>
              );
            }
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Seat;
