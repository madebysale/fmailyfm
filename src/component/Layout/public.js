import { Link as RouterLink, Outlet } from "react-router-dom";
import React from "react";

export default function PublicLayout() {
  return (
    <React.Fragment>
      <div className="kkk">
        <RouterLink to="/"></RouterLink>
        <Outlet />
      </div>
    </React.Fragment>
  );
}
