import React from "react";

function Spinner() {
  return (
    <div className="fixed inset-0 bg-black opacity-50 flex justify-center items-center z-[9999]">
      <div className="w-10 h-10 border-4 border-solid border-white border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}

export default Spinner;
