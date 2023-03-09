import React from "react";
import { Link } from "react-router-dom";
import SubMenuChildrenDestop from "./SubMenuChildrenDestop";

const SubMenuParentDestop = ({ data }) => {
  return (
    <>
      <li class="dropdownmenu">
        <Link href="#">{data.title}</Link>
        {data.children ? (
          <ul class="sub-menu">
            {data.children.map((data, index) => {
              return <SubMenuChildrenDestop data={data} key={index} />;
            })}
          </ul>
        ) : (
          ""
        )}
      </li>
    </>
  );
};

export default SubMenuParentDestop;
