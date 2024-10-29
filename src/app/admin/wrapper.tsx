import React from "react";

function Wrapper({ children }) {
  return <div className="flex mt-4 gap-4 flex-wrap">{children}</div>;
}

export default Wrapper;
