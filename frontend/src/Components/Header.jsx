import React from "react";
import { Link } from "react-router-dom";
import LoginButton from "./LoginButton";
import SignupButton from "./SignupButton";
import { MdMenu } from "react-icons/md";

function Header({
  scrollToAbout,
  scrollToHome,
  scrollToEvent,
  scrollToContact,
}) {
  return (
    <header className="h-24 flex items-center justify-between sticky top-0 bg-white px-20 max-sm:px-4">
      {/* logo */}
      <Link
        onClick={(e) => {
          e.preventDefault();
          scrollToHome();
        }}
      >
        <img
          src="./iif-nsut-transparent.png"
          alt="Logo"
          className="w-20 h-20 rounded-full"
        />
      </Link>

      {/* navbar */}
      <nav className="h-14 gap-10 flex items-center max-custom1:hidden">
        <Link
          onClick={(e) => {
            e.preventDefault();
            scrollToHome();
          }}
          className="text-lg"
        >
          Home
        </Link>
        <Link
          onClick={(e) => {
            e.preventDefault();
            scrollToEvent();
          }}
          className="text-lg"
        >
          Event Gallery
        </Link>
        <Link
          onClick={(e) => {
            e.preventDefault();
            scrollToAbout();
          }}
          className="text-lg"
        >
          About Us
        </Link>
        <Link
          onClick={(e) => {
            e.preventDefault();
            scrollToContact();
          }}
          className="text-lg"
        >
          Contact us
        </Link>
      </nav>

      {/* Signup & Login & Menu */}
      <div className="flex gap-4 items-center">
        <div className="h-14 flex items-center">
          <LoginButton />
          <SignupButton />
        </div>

        <nav>
          <input type="checkbox" className="hidden" id="menu" />
          <label htmlFor="menu">
            <MdMenu className="text-4xl block md:hidden" />
          </label>
        </nav>
      </div>
    </header>
  );
}

export default Header;
