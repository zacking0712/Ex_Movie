import React from "react";
import { useSelector } from "react-redux";

const TableTong = () => {
  const { seat } = useSelector((reducer) => reducer.seatMovie);
  let arrDataRedux = seat.flatMap((item, index) => {
    return item.danhSachGhe;
  });

  // console.log(arrDataRedux);

  // let arrStatus = arrDataRedux.map((item, index) => {
  //   return item;
  // });
  console.log(arrDataRedux);
  // console.log(arrDataRedux.daDat);
  let sumPrice = 0;
  seat.flatMap((item, index) => {
    return item.danhSachGhe.map((item, index) => {
      if (item.daDat == true) {
        sumPrice += item.gia;
      }
    });
  });
  // console.log(sumPrice);

  return (
    <div className=" overflow-auto h-[500px]">
      <table className="text-orange-500 border my-5 text-3xl text-center ">
        <tr>
          <th className="border px-4 ">Số ghế</th>
          <th className="border px-4 ">Giá vé</th>
        </tr>
        {seat.flatMap((item, index) => {
          return (
            <>
              <tbody>
                {item.danhSachGhe.map((item, index) => {
                  if (item.daDat == true) {
                    return (
                      <>
                        <tr className="">
                          <td className="border p-2">{item.soGhe}</td>
                          <td className="border p-2">{item.gia}</td>
                          {/* {(x += item.gia)} */}
                        </tr>
                      </>
                    );
                  }
                })}
              </tbody>
            </>
          );
        })}
        <tr>
          <th className="border px-4 ">Tổng</th>
          <th className="border px-4 ">{sumPrice}</th>
        </tr>
      </table>
    </div>
  );
};

export default TableTong;
