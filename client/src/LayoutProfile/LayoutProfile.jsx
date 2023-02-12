import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { useAuth0 } from "@auth0/auth0-react";
import NotFound from "../pages/NotFound/NotFound";

function LayoutProfile() {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  //overflow-y-scroll
  return isAuthenticated ? (
    <div className="min-h-screen grid  grid-cols-1 xl:grid-cols-6">
      <Sidebar />
      <div className="xl:col-span-5">
        <Header />
        <div className="h-[90vh]  p-8">
          <Outlet />
        </div>
      </div>
    </div>
  ) : (
    <NotFound />
  );
}

export default LayoutProfile;
