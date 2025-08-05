import { Link, useLocation } from 'react-router-dom';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import { useEffect, useState } from 'react';

const Footer = () => {
   const location = useLocation();
  const [adminRoute, setAdminRoute] = useState(false);

  useEffect(() => {
    setAdminRoute(location.pathname.split("/", 2).includes("admin"))
  }, [location]);
  return (
    <>
      {!adminRoute &&(<footer className="bg-gray-900 text-gray-300 py-10 px-5 sm:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
  
          {/* Brand Info */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Mayuri Fashion</h2>
            <p className="text-sm">
              Premium clothing for everyone. Shop the latest trends and timeless essentials.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-white">
                <FaFacebookF />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white">
                <FaInstagram />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-white">
                <FaTwitter />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-white">
                <FaYoutube />
              </a>
            </div>
          </div>
  
          {/* Shop Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/products/men" className="hover:text-white">Men</Link></li>
              <li><Link to="/products/women" className="hover:text-white">Women</Link></li>
              <li><Link to="/products/kids" className="hover:text-white">Kids</Link></li>
              <li><Link to="/new-arrivals" className="hover:text-white">New Arrivals</Link></li>
            </ul>
          </div>
  
          {/* Support Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/contact" className="hover:text-white">Contact Us</Link></li>
              <li><Link to="/faq" className="hover:text-white">FAQ</Link></li>
              <li><Link to="/shipping" className="hover:text-white">Shipping & Returns</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
            </ul>
          </div>
  
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Get In Touch</h3>
            <div className="flex items-start gap-2 text-sm mb-2">
              <FaMapMarkerAlt className="mt-1" />
              <p>Irinjalakkuda, Thrissur</p>
            </div>
            <div className="flex items-center gap-2 text-sm mb-2">
              <FaPhoneAlt />
              <p>+91 98765 43210</p>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <FaEnvelope />
              <p>support@mayuri.com</p>
            </div>
          </div>
        </div>
  
        {/* Bottom Bar */}
        <div className="text-center text-sm text-gray-500 mt-10 border-t border-gray-700 pt-4">
          &copy; {new Date().getFullYear()} Mayuri Fashion. All rights reserved.
        </div>
      </footer>)}
    </>
  );
};

export default Footer;
