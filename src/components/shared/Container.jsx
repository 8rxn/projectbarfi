import React from "react";

function Container({ children, id }) {
  return (
    <div
      id={id}
      className="w-full h-auto overflow-x-hidden overflow-y-auto flex flex-col items-start justify-center min-h-screen mt-0 mx-auto mb-[10%]"
    >
      {children}
    </div>
  );
}

export default Container;
