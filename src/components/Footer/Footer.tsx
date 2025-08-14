import React from "react";
import {
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiMail,
  FiPhone,
} from "react-icons/fi";

const Footer: React.FC = () => {
  return (
    <footer
      id="footer"
      className="bg-emerald-600 text-white px-6 md:px-20 py-10"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold italic mb-3">pesalens</h2>
          <p className="text-sm leading-relaxed">
            Pesalens helps you track and manage your finances with ease. Stay in
            control and make informed financial decisions every day.
          </p>
          <div className="flex gap-4 mt-4">
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-emerald-300"
            >
              <FiFacebook size={20} />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-emerald-300">
              <FiTwitter size={20} />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-emerald-300"
            >
              <FiInstagram size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center">
          <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2 text-center">
            <li>
              <a
                href="#about"
                className="hover:text-emerald-300 hover:underline"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#privacy"
                className="hover:text-emerald-300 hover:underline"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#terms"
                className="hover:text-emerald-300 hover:underline"
              >
                Terms & Conditions
              </a>
            </li>
            <li>
              <a
                href="#support"
                className="hover:text-emerald-300 hover:underline"
              >
                Support
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center">
          <h3 className="font-semibold text-lg mb-3">Contact Us</h3>
          <ul className="space-y-2 text-center">
            <li className="flex items-center gap-2">
              <FiMail size={18} />
              <a
                href="mailto:pesalens@gmail.com"
                className="hover:text-emerald-300"
              >
                pesalens@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FiPhone size={18} />
              <a href="tel:+254700000000" className="hover:text-emerald-300">
                +254 700 000 000
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-emerald-400 mt-10 pt-4 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Pesalens. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
