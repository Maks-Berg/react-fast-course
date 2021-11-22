import React from "react";

// Images
import logoImage from "../../assets/images/Header/logo.svg"

const Header = () => {
  return (
      <header>
        <div className="logo">
            <img src={logoImage} alt="logo" />
        </div>
      </header>
  )
}

export default  Header;