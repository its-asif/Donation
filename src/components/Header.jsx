import { useState } from "react";

const Header = ({onSearch}) => {
  const [searchKey, setSearchKey] = useState('');

  const handleInputChange = (e) => {
    setSearchKey(e.target.value);
  };
  const handleSearchClick = () => {
      onSearch(searchKey);
  };

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
          <h1 className="mb-16 text-4xl md:text-5xl font-bold text-black">
            I Grow By Helping People In Need
          </h1>
          <div className="join ">
            <input
              className="input input-bordered join-item md:w-96 text-black"
              placeholder="Search here..."
              value={searchKey}
              onChange={handleInputChange}
            />
            <button className="btn join-item rounded-r-md bg-[#ff444a] text-white font-bold md:w-28 border-none"
             onClick={handleSearchClick}
             >Search</button> 

          </div>
        </div>
      </div>
    </div>
    // https://i.ibb.co/zF1kT8j/banner.png
  );
};

export default Header;
