import React from "react";

const Header = () => {
  return (
    <header className="">
      <nav className="flex justify-around items-center bg-primary">
        <a className="flex justify-center self-center" href="index.html">
          <img className="w-24 px-1 py-0" src="src/assets/images/knights_logos/kneeling_knight_crop.png" alt="knight Logo" />
        </a>
        <div className="title">
          <h4>Trivium Prep Football</h4>
        </div>
        <ul className="flex justify-around w-1/3">
          <li>
            <a className="active" href="index.html">
              Home
            </a>
          </li>
          <li>
            <a href="./pages/roster.html">Roster</a>
          </li>
          <li>
            <a href="./pages/schedule.html">Schedule</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
