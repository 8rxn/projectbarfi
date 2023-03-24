import React from "react";

function SectionLayout({ children, id }) {
  return (
    <div
      className="w-full h-auto overflow-x-hidden overflow-y-hidden flex flex-col items-start justify-center mt-14 lg:mt-28"
      id={id}
    >
      {children}
    </div>
  );
}

export default SectionLayout;
