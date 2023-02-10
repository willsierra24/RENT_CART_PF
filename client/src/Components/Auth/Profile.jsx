import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

export const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <React.Fragment>
      <NavBar />
      {isAuthenticated && (
        <div>
          <img src={user.picture} alt={user.name} />
          <h2 className="text2">{user.name}</h2>
          <p className="text2">Email: {user.email}</p>
        </div>
      )}
      <Footer />
    </React.Fragment>
  );
};
