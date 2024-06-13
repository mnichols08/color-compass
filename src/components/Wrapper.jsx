import React from "react";

function Wrapper({ children }) {
  return (
    <div className='font-display m-auto '>
      {children}
    </div>
  );
}

export default Wrapper;
