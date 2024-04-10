import React from "react";
import TableTong from "./TableTong";

const InfoSeat = () => {
  return (
    <div>
      <h1 className="text-5xl text-white mt-10 mb-5">Ghế bạn đặt</h1>
      {/* Default */}
      <div>
        <p className="text-white text-2xl flex items-center">
          <span className="w-6 h-6 bg-orange-500 rounded text-transparent mx-2">
            ......
          </span>
          Ghế đã đặt
        </p>
        <br />
        <p className="text-white text-2xl flex items-center">
          <span className="w-6 h-6 bg-green-500 rounded text-transparent mx-2">
            ......
          </span>
          Ghế đã đặt
        </p>
        <br />
        <p className="text-white text-2xl flex items-center">
          <span className="w-6 h-6 bg-gray-500 rounded text-transparent mx-2">
            ......
          </span>
          Ghế đã đặt
        </p>
      </div>
      {/* Table */}
      <TableTong />
    </div>
  );
};

export default InfoSeat;
