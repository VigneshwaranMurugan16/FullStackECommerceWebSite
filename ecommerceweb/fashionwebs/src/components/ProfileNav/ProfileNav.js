import React from "react";


const ProfileNav = ({onProfileRouteChange})=>{
  const handleLinkClick = (route)=>{
    onProfileRouteChange(route);
  }
    return(

        <nav className="navbar1">
          <ul className="nav-list1">
            <li className="nav-item1">
              <a href="#" onClick={ ()=>handleLinkClick('pi')}>Personal Information</a>
            </li>
            <li className="nav-item1">
              <a href="#" onClick={()=> handleLinkClick('order')}>Order History</a>
            </li>
          </ul>
        </nav>
    );
}

export default ProfileNav;