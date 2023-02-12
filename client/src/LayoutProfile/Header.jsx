import React from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import { useAuth0 } from "@auth0/auth0-react";
function Header() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    isAuthenticated && (
      <header className="h-[7vh] md:h[10vh] border-b border-secondary-100 p-8 flex justify-end items-center ">
        <nav className="flex items-center gap-x-2">
          <button className="items-center flex gap-x-2">
            <img
              src={user.picture}
              alt={user.name}
              className="w-6 h-6 object-cover rounded-full"
            />
            <h1>Hello!</h1>
            <span>{user.name}</span>
            <RiArrowDownSLine />
          </button>
        </nav>
      </header>
    )
  );
}

export default Header;
