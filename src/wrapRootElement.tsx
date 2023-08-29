import React from "react";
import { GatsbyBrowser } from "gatsby";
import SidebarLeft from "./components/template/sidebarLeft";

const WrapRootElement: GatsbyBrowser["wrapRootElement"] = ({ element }) => {
  return (
    <>
      <SidebarLeft />
      {element}
      <div className="sidebarRight"></div>
    </>
  );
};

export default WrapRootElement;
