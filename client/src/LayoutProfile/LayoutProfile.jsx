import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import NavBar from "../Components/NavBar/NavBar";
import Footer from "../Components/Footer/Footer";

function LayoutProfile() {
  //overflow-y-scroll
  return (
    <React.Fragment>
      <NavBar />
      <div>
        <div className="bg-secondary-900 min-h-screen grid  grid-cols-1 xl:grid-cols-6 mt-10">
          <Sidebar />
          <div className="xl:col-span-5">
            <Header />
            <div className="h-[90vh]  p-8">
              <Outlet />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
}
export default LayoutProfile;
