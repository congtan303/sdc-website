import React, { useState } from "react";
import { Link } from "react-router-dom";
import SubMenuChildrenMini from "./SubMenuChildrenMini";

const SubMenuChildren = ({ data }) => {
  const [childrenSubnav, setChildrenSubnav] = useState(false);
  const showChildrenSubnav = () => setChildrenSubnav(!childrenSubnav);
  return (
    <>
      <ul class="mobi-sub-menu">
        <li>
          <Link href="#">{data.nameMenu}</Link>
          <i class={`${data.ChildrenMiniMenu && childrenSubnav ? data.iconDown : data.ChildrenMiniMenu ? data.iconRight : null}`} onClick={data.ChildrenMiniMenu && showChildrenSubnav}></i>
          {childrenSubnav &&
            data.ChildrenMiniMenu.map((data, index) => {
              return <SubMenuChildrenMini data={data} key={index} />;
            })}
        </li>
      </ul>
    </>
  );
};

export default SubMenuChildren;
