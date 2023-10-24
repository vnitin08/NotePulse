import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>NotePulse &copy; {year} (Nitin Verma)</p>
    </footer>
  );
}

export default Footer;
