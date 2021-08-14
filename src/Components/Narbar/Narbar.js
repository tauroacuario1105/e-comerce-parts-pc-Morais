import React from "react";


export const NavBar = () => {
  return (
    <div id="header" bg="dark" variant="dark">
      <div>
        <img id="menu" class="logo" src="https://w7.pngwing.com/pngs/568/379/png-transparent-technology-computer-icons-technology-electronics-text-logo.png"></img>
        <nav className="enlacesMenu">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
        </nav>
        <input></input>
      </div>
    </div>
  );
};
