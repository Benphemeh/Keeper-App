import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>O'Ben Brands ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
