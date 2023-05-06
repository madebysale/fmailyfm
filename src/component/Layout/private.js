import { Link as RouterLink, Outlet } from "react-router-dom";
import React from "react";

export default function PrivateLayout() {
  return (
    <React.Fragment>
      <div className="kkk">
        <RouterLink to="/admin"></RouterLink>
        
        
        <Outlet />
      </div>
      <div>
      <RouterLink to='/sales'></RouterLink>
        {/* <RouterLink to="/invoice"></RouterLink> 
      <RouterLink to="/form"></RouterLink> 
     <RouterLink to="/viewdetail/:id"></RouterLink> */}
      {/* <Outlet/> */}
      </div>
    </React.Fragment>
  );
}
