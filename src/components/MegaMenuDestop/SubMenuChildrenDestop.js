import React from "react";
import { Link } from "react-router-dom";

const SubMenuChildrenDestop = ({ data }) => {
  return (
    <>
      <li class="dropdownmenu">
        <Link href="#">{data.title}</Link>
        {data.children ? (
          <ul class="sub-menu">
            {data.children.map((data, index) => {
              return (
                <li key={index}>
                  <Link href="#">{data.title}</Link>
                </li>
              );
            })}
          </ul>
        ) : (
          ""
        )}
      </li>
    </>
  );
};

export default SubMenuChildrenDestop;
