import React from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import Auth from "./Auth";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-4 py-2 bg-white shadow-md">
      {/* Logo */}
      <Logo />
      {/* MenuBar */}
      <Navbar />
      {/* Auth */}
      <Auth />
    </header>
  );
};

export default Header;
