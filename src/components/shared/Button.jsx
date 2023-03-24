import React from "react";

function Button({ children }) {
  return (
    <>
      <button className="bg-gradient-to-r from-color-primary to-color-secondary rounded-3xl py-2 px-5 text-bg-primary w-[120px] font-semibold cursor-pointer">
        {children}
      </button>
    </>
  );
}

export default Button;
