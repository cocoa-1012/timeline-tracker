import React from "react";
import LevelSvg1 from "../assets/svgs/level1.svg";
import { useSelector } from "react-redux";
const LeftPart = ({ data }) => {
    const expand = useSelector((state) => state.spanReducer).expand;
  return (
    <div style={{flex: `1 1 ${expand ? "60%" : "30%"}`, transition: "flex 300ms ease 0s"}}  className="flex items-center">
      <img src={LevelSvg1} alt="icon" className="h-4 w-4 mr-2" />
      <p className="text-sm font-bold text-[#42526e] px-1">{data.attrs["service.name"]}</p>
      <p className="text-sm text-[#42526e] px-1">{data.attrs["http.scheme"]?.toUpperCase()}</p>
      <p className="text-sm text-[#42526e] px-1">{data.attrs["http.method"]?.toUpperCase()}</p>
      <p className="text-sm text-[#9ba1af] italic px-1">{data.operationName}</p>
    </div>
  );
};

export default LeftPart;
