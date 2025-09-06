import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="footer" className="bg-[#1A1A1A] text-white py-10 px-6 animate-fade-in">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* About Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Lost & Found</h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            Lost & Found is your trusted platform to help people reconnect with their misplaced belongings. Whether you’ve lost something or found something, post it here. 🤝
            <br /><br />
            Rebuilding kindness and trust, one item at a time.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="#Hero" className="hover:text-white transition duration-300">🏠 Home</a>
            </li>
            <li>
              <a href="#reportlost" className="hover:text-white transition duration-300">🔍 Report Lost Item</a>
            </li>
            <li>
              <a href="#reportfound" className="hover:text-white transition duration-300">📦 Report Found Item</a>
            </li>
            <li>
              <a href="#howitworks" className="hover:text-white transition duration-300">📘 How It Works</a>
            </li>
            <li>
              <a href="#contactus" className="hover:text-white transition duration-300">📞 Contact Us</a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Contact Info</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-blue-400" />
              <span>+91 809-330-XXXX</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-blue-400" />
              <span>lostfound.helpdesk@gmail.com</span>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-blue-400" />
              <span>Bhubaneswar, India - 751030</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-500">
        <p>
          © {new Date().getFullYear()} <strong className="text-white">SomBhav Developers</strong>. All rights reserved. <br />
          Built with ❤️ for a safer, more connected community.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

