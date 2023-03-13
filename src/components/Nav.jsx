import React from "react";
import "../index.css";

const Nav = () => {
  return (
    <header className="header absolute">
      <nav className="sm:p-10 p-5">
        <span className="sm:text-3xl text-2xl cursor-default">
          Exsolve
        </span>
      </nav>
    </header>
  );
};

export default Nav;
