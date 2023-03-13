import React, { useState } from "react";
import { Link } from "react-router-dom";
import SubMenuChildren from "./SubMenuChildren";

const SubMenuParent = ({ data }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <li>
        <Link to={data.slug}>{data.title}</Link>
        <i className={`${data.children && subnav ? "fa-solid fa-angle-down" : data.children ? "fa-solid fa-angle-right" : null}`} onClick={data.children && showSubnav}></i>
        <ul className="mobi-sub-menu">
          {subnav &&
            data.children.map((data, index) => {
              return <SubMenuChildren data={data} key={index} />;
            })}
        </ul>
      </li>
    </>
  );
};

export default SubMenuParent;
