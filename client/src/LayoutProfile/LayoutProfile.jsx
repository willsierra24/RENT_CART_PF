import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import NavBar from "../Components/NavBar/NavBar";
import Footer from "../Components/Footer/Footer";

function LayoutProfile() {
  //overflow-y-scroll
  return (
    <>
      <NavBar />
      <div className="grid  grid-cols-1 xl:grid-cols-6">
        <Sidebar />
        <div className="xl:col-span-5">
          <Header />
          <div className="h-[70vh]  p-8">
            <Outlet />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default LayoutProfile;
