import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "../pages/NotFound/NotFound";
import About from "../pages/About/About";
import Home from "../Components/Home/Home";
import LandingPage from "../Components/LandingPage/LandingPage";
import Contact from "../pages/Contact/Contact";
import FaqSection from "../pages/FaqSection/FaqSection";
import Details from "../Components/Details/Details";
<<<<<<< HEAD
import Shoping from "../Components/shoping/shoping";
=======
// import { Profile } from "../Components/Auth/Profile";
import LayoutProfile from "../LayoutProfile/LayoutProfile";
import MyDates from "../LayoutProfile/MyDates";
import Bookings from "../LayoutProfile/Bookings";
>>>>>>> dcf4e5383d6009288325ebf5cc26d1e7ffdb5011

function RouteApp() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="about" element={<About />} />
        <Route exact path="home" element={<Home />} />
        <Route exact path="contact" element={<Contact />} />
        <Route exact path="faq" element={<FaqSection />} />
        <Route exact path="detail/:id" element={<Details />} />
<<<<<<< HEAD
        <Route exact path="shoping" element={<Shoping />} />
=======
        {/* <Route exact path="profile" element={<Profile />} /> */}
        <Route path="/profile" element={<LayoutProfile />}>
          <Route index element={<MyDates />} />
          <Route path="bookings" element={<Bookings />} />
        </Route>
>>>>>>> dcf4e5383d6009288325ebf5cc26d1e7ffdb5011

        <Route exact path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default RouteApp;
