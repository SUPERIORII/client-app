import React from "react";
import { MdCloudOff, MdErrorOutline } from "react-icons/md";
import { AiFillCloud, AiFillWarning } from "react-icons/ai";

import { FiServer } from "react-icons/fi";

export const ServerStatesUI = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 text-lg">
      <div className="relative">
        <AiFillCloud size={300} className="text-gray-500" />
        <div className="absolute bottom-14 -0 flex ">
          <AiFillWarning size={100} color="red" />
          <FiServer size={100} fill="white" />
        </div>
      </div>
      <h2 className="capitalize font-medium text-gray-600">
        Something wen wrong
      </h2>
      <span>Check you network connection and try again</span>
    </div>
  );
};
