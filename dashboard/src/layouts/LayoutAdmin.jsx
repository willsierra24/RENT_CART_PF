import React from "react";
import { Outlet } from "react-router-dom";

function LayoutAdmin() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1>LayoutAdmin</h1>
      <Outlet />
    </div>
  );
}

export default LayoutAdmin;
