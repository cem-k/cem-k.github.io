import React, { useState, useEffect } from "react";

const Header = () => {
  const [scrollContent, setScrollContent] = useState("cheap!");

  useEffect(() => {
    const interval = setInterval(() => {
      switch (scrollContent) {
        case "cheap":
          setScrollContent("easy!");
          break;
        case "easy":
          setScrollContent("fast!");
          break;
        case "fast":
          setScrollContent("cheap!");
          break;
        default:
          setScrollContent("cheap!");
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [scrollContent]);

  return (
    <div className="header" id="Home">
      <div className="headertext">
        <h1>Seat Map made&nbsp;</h1>
        <span key={scrollContent} className="inner-headings gradient">
          {scrollContent}
        </span>
      </div>
      <p className="description">
        Create your seat maps in a few clicks, as often as you want, with our
        easy-to-use solution.
      </p>
      <button>Coming soon!</button>
    </div>
  );
};

export default Header;
