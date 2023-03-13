import React, { useState } from "react";
import { Link } from "react-router-dom";
import SubMenuChildrenMini from "./SubMenuChildrenMini";

const SubMenuChildren = ({ data }) => {
  console.log(data.title);
  const [childrenSubnav, setChildrenSubnav] = useState(false);
  const showChildrenSubnav = () => setChildrenSubnav(!childrenSubnav);
  return (
    <>
      <li>
        <Link to={data.slug}>{data.title}</Link>
        <i className={`${data.children && childrenSubnav ? "fa-solid fa-angle-down" : data.children ? "fa-solid fa-angle-right" : null}`} onClick={data.children && showChildrenSubnav}></i>
        <ul className="mobi-sub-menu">
          {childrenSubnav &&
            data.children.map((data, index) => {
              return <SubMenuChildrenMini data={data} key={index} />;
            })}
        </ul>
      </li>
    </>
  );
};

export default SubMenuChildren;
