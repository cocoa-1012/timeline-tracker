import React from "react";
import LeftPart from "../components/LeftPart";
import RightPart from "../components/RightPart";
import { spans } from "../utils/spans";
import { useDispatch, useSelector } from "react-redux";
import ExpandSvg from "../assets/svgs/expand.svg";
import NonExpandSvg from "../assets/svgs/nonExpand.svg";

const SpanGraph = () => {
  const dispatch = useDispatch();
  const expand = useSelector((state) => state.spanReducer).expand;
  console.log("SFA", expand);
  return (
    <div className="relative flex flex-col">
      <div style={{left: `${expand ? "58%" : "28%"}`, transition: "left 500ms ease 0s"}} className={`absolute flex items-center h-[100%] w-5`}>
        <button
        style={{color: "rgba(0, 0, 0, 0.54)"}}
        className="w-5 h-5 hover:bg-[#edeff7]"
          onClick={() => dispatch({ type: "SET_EXPAND", payload: !expand })}
        >
          {expand ? (
            <img src={NonExpandSvg} alt="nonExpand" />
          ) : (
            <img src={ExpandSvg} alt="Expand" />
          )}
        </button>
      </div>
      {spans.map((item, i) => (
        <div className="flex justify-between hover:bg-[#edeff7] cursor-pointer">
          <LeftPart data={item} />
          <RightPart data={item} />
        </div>
      ))}
    </div>
  );
};

export default SpanGraph;
