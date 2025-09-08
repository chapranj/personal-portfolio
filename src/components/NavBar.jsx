import { useState, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/github-mark-white.svg";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // mobile menu toggle

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsOpen(false); // close mobile menu on click
  };

  // Scroll offset for fixed navbar
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80; // navbar height
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  const navLinks = ["home", "skills", "projects", "experiences"];

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all ${
        scrolled
          ? "bg-gray-900/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="flex items-center">
          {/* <img src={logo} alt="Logo" className="h-10 w-10" /> */}
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link}
              to={`#${link}`}
              smooth
              scroll={scrollWithOffset}
              onClick={() => handleLinkClick(link)}
              className={`font-medium px-4 py-2 rounded-md transition-all duration-300 no-underline ${
                activeLink === link
                  ? "bg-purple-500 text-white shadow-lg transform scale-105"
                  : "text-gray-300 hover:text-white hover:bg-gray-700 hover:shadow-md"
              }`}
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </Link>
          ))}

          <div className="flex items-center space-x-4 ml-6">
            <a href="https://www.linkedin.com/in/pchauhan17/">
              <img src={navIcon1} alt="LinkedIn" className="h-6 w-6" />
            </a>
            <a href="https://www.github.com/chapranj">
              <img src={navIcon2} alt="GitHub" className="h-6 w-6" />
            </a>
            <Link
              to="#connect"
              smooth
              scroll={scrollWithOffset}
              className="ml-4 px-4 py-2 rounded-md bg-purple-500 text-white font-medium hover:bg-purple-600 transition"
            >
              Let’s Connect
            </Link>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none text-gray-300"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-md shadow-md">
          <div className="flex flex-col space-y-4 px-6 py-4">
            {navLinks.map((link) => (
              <Link
                key={link}
                to={`#${link}`}
                smooth
                scroll={scrollWithOffset}
                onClick={() => handleLinkClick(link)}
                className={`font-medium transition-colors ${
                  activeLink === link
                    ? "text-purple-400"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </Link>
            ))}

            <div className="flex items-center space-x-4 mt-2">
              <a href="https://www.linkedin.com/in/pchauhan17/">
                <img src={navIcon1} alt="LinkedIn" className="h-6 w-6" />
              </a>
              <a href="https://www.github.com/chapranj">
                <img src={navIcon2} alt="GitHub" className="h-6 w-6" />
              </a>
              <Link
                to="#connect"
                smooth
                scroll={scrollWithOffset}
                className="ml-4 px-4 py-2 rounded-md bg-purple-500 text-white font-medium hover:bg-purple-600 transition"
              >
                Let’s Connect
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
