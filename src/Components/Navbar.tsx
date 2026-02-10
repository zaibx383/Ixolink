import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-white/95 backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center py-2">
              <img
                src="/logo-header.png"
                alt="Ixolink Logo"
                className="h-14 md:h-16 w-auto object-contain"
              />
              {/* Optionally: Add a visually hidden site name for accessibility */}
              <span className="sr-only">Ixolink</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-10 lg:space-x-14">
              <NavLink to="/" active={location.pathname === "/"}>
                Home
              </NavLink>
              <NavLink to="/about" active={location.pathname === "/about"}>
                About
              </NavLink>
              <NavLink to="/services" active={location.pathname === "/services"}>
                Services
              </NavLink>
              <NavLink
                to="/testimonials"
                active={location.pathname === "/testimonials"}
              >
                Testimonials
              </NavLink>
              <NavLink to="/contact" active={location.pathname === "/contact"}>
                Contact
              </NavLink>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="px-7 py-3 rounded-full bg-gradient-to-r from-purple-600 to-indigo-800 text-white font-bold text-base shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
              aria-label="Open main menu"
            >
              <Menu className="h-7 w-7" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 shadow-lg">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            <MobileNavLink to="/" active={location.pathname === "/"}>
              Home
            </MobileNavLink>
            <MobileNavLink to="/about" active={location.pathname === "/about"}>
              About
            </MobileNavLink>
            <MobileNavLink to="/services" active={location.pathname === "/services"}>
              Services
            </MobileNavLink>
            <MobileNavLink
              to="/testimonials"
              active={location.pathname === "/testimonials"}
            >
              Testimonials
            </MobileNavLink>
            <MobileNavLink to="/contact" active={location.pathname === "/contact"}>
              Contact
            </MobileNavLink>
          </div>
          <div className="px-5 py-4 border-t border-gray-200">
            <Link
              to="/contact"
              className="w-full flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-indigo-800 text-white font-bold text-base shadow"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

/* Desktop Nav Link */
const NavLink = ({ to, children, active }) => (
  <Link
    to={to}
    className={`relative font-semibold text-lg transition-colors duration-300 pb-2 ${
      active
        ? "text-purple-600"
        : "text-gray-900 hover:text-purple-600"
    }`}
  >
    {children}
    {active && (
      <span className="absolute left-0 -bottom-1 w-full h-1 bg-purple-600 rounded-full" />
    )}
  </Link>
);

/* Mobile Nav Link */
const MobileNavLink = ({ to, children, active }) => (
  <Link
    to={to}
    className={`block px-4 py-4 rounded-md text-lg font-semibold ${
      active
        ? "text-purple-700 bg-purple-50"
        : "text-gray-800 hover:bg-gray-50"
    }`}
  >
    {children}
  </Link>
);

export default Navbar;