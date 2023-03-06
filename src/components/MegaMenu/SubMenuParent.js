import React, { useState } from "react";
import { Link } from "react-router-dom";
import SubMenuChildren from "./SubMenuChildren";

const SubMenuParent = ({ data }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <ul class="clear mobi-menu">
        <li>
          <Link href="#">{data.parentMenu}</Link>
          <i class={`${data.childrenMenu && subnav ? data.iconDown : data.childrenMenu ? data.iconRight : null}`} onClick={data.childrenMenu && showSubnav}></i>

          {subnav &&
            data.childrenMenu.map((data, index) => {
              return <SubMenuChildren data={data} key={index} />;
            })}
        </li>
      </ul>
    </>
  );
};

export default SubMenuParent;
