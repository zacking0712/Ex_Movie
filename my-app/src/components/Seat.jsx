import React from "react";
import { dataSeat } from "../data/dataSeat";
import { useDispatch } from "react-redux";
import { thayDoiTrangThai } from "../redux/slice/seatMovie";

const Seat = ({ handleClickSeat, status }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <table className="text-yellow-500 text-3xl">
        <thead className="mb-5">
          <tr>
            {dataSeat[0].danhSachGhe.map((seat, index) => {
              return <th key={index}>{seat.soGhe}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {dataSeat.map((seat, index) => {
            if (index > 0) {
              return (
                <tr key={index}>
                  {seat.danhSachGhe.map((item, index) => {
                    return (
                      <td
                        onClick={() => {
                          handleClickSeat(item.soGhe, item.daDat);
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
