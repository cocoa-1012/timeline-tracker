import React from 'react';
import { useSelector } from 'react-redux';

const RightPart = () => {
    const expand = useSelector((state) => state.spanReducer).expand;
    return (
        <div style={{flex: `1 1 ${expand ? "40%" : "70%"}`, transition: "flex 300ms ease 0s"}} className={`flex w-[${expand ? "40%" : "70%"}] bg-red-300 overflow-hidden`}>
            RightParta
        </div>
    )
} 

export default RightPart;