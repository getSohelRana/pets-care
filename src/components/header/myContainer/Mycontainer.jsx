import React from "react";

const Mycontainer = ({ className, children }) => {
  return <div className={`${className} container mx-auto`}>{children}</div>;
};

export default Mycontainer;
