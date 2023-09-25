import React from "react";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <div
      className="hero h-[500px]"
      style={{
        backgroundImage: "url(https://i.ibb.co/zF1kT8j/banner.png)",
      }}
    >
      <div className="hero-overlay bg-opacity-90 bg-white"></div>
      <div className="hero-content text-center text-neutral-content">
        <div>
          <h1 className="mb-5 text-5xl font-bold mb-16">
            I Grow By Helping People In Need
          </h1>
          <div className="join ">
            <input
              className="input input-bordered join-item w-96 text-black"
              placeholder="Search here..."
            />
            <button className="btn join-item rounded-r-md bg-[#ff444a] text-white font-bold w-28 border-none">Search</button>
          </div>
        </div>
      </div>
    </div>
    // https://i.ibb.co/zF1kT8j/banner.png
  );
};

export default Header;
