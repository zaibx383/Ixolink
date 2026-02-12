import React from "react";
import { Link } from "react-router-dom";
import { Linkedin, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-indigo-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Column 1 - Logo & About */}
          <div>
            <Link to="/" className="inline-block mb-6">
              <img
                src="/logo-footer.png"
                alt="Ixolink Logo"
                className="h-16 md:h-20 w-auto object-contain"

              />
            </Link>

            <p className="text-indigo-200 text-sm leading-relaxed mb-6">
              Data driven agency focused on building reliable connections between
              businesses and their audiences through verified lead generation and
              intelligent web data solutions.
            </p>

            <div className="flex space-x-4">
              <SocialLink href="#" icon={<Linkedin size={18} />} />
              <SocialLink href="#" icon={<Twitter size={18} />} />
              <SocialLink href="#" icon={<Facebook size={18} />} />
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="text-base font-bold mb-5">Quick Links</h4>
            <ul className="space-y-3">
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/about">About Us</FooterLink>
              <FooterLink to="/services">Services</FooterLink>
              <FooterLink to="/testimonials">Testimonials</FooterLink>
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div>
            <h4 className="text-base font-bold mb-5">Services</h4>
            <ul className="space-y-3">
              <FooterLink to="/services">B2B Lead Generation</FooterLink>
              <FooterLink to="/services">B2C Lead Generation</FooterLink>
              <FooterLink to="/services">Web Data Solutions</FooterLink>
              <FooterLink to="/services">Data Verification</FooterLink>
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h4 className="text-base font-bold mb-5">Contact</h4>
            <ul className="space-y-3 text-indigo-200 text-sm">
              <li>contact@ixolink.com</li>
              <li>+1 (555) 123-4567</li>
              <li>Global Services</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-indigo-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-indigo-200 text-sm">
            &copy; 2026 Ixolink. All rights reserved.
          </p>

          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link
              to="#"
              className="text-indigo-200 hover:text-white text-sm transition-colors duration-300"
            >
              Privacy Policy
            </Link>

            <Link
              to="#"
              className="text-indigo-200 hover:text-white text-sm transition-colors duration-300"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

/* Social Icon Link */
const SocialLink = ({ href, icon }) => (
  <a
    href={href}
    className="w-10 h-10 bg-indigo-800 hover:bg-purple-600 rounded-full flex items-center justify-center transition-colors duration-300"
    target="_blank"
    rel="noopener noreferrer"
  >
    {icon}
  </a>
);

/* Footer Navigation Link */
const FooterLink = ({ to, children }) => (
  <li>
    <Link
      to={to}
      className="text-indigo-200 hover:text-white text-sm transition-colors duration-300"
    >
      {children}
    </Link>
  </li>
);

export default Footer;
