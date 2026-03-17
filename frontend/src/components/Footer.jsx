import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, MapPin, Phone, Mail, Facebook, Instagram, Youtube } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white leading-tight">MAA DIGITAL</span>
                <span className="text-xs text-gray-400 leading-tight">Computer Education</span>
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Empowering students with quality computer education and practical skills for a successful career in IT industry.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm hover:text-blue-400 transition-colors">Home</Link></li>
              <li><Link to="/courses" className="text-sm hover:text-blue-400 transition-colors">Courses</Link></li>
              <li><Link to="/admission" className="text-sm hover:text-blue-400 transition-colors">Admission Process</Link></li>
              <li><Link to="/about" className="text-sm hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-sm hover:text-blue-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Popular Courses */}
          <div>
            <h3 className="text-white font-semibold mb-4">Popular Courses</h3>
            <ul className="space-y-2">
              <li className="text-sm hover:text-blue-400 transition-colors cursor-pointer">Basic Computer Course</li>
              <li className="text-sm hover:text-blue-400 transition-colors cursor-pointer">Tally & Excel</li>
              <li className="text-sm hover:text-blue-400 transition-colors cursor-pointer">Web Development</li>
              <li className="text-sm hover:text-blue-400 transition-colors cursor-pointer">Graphic Design</li>
              <li className="text-sm hover:text-blue-400 transition-colors cursor-pointer">Digital Marketing</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>123 Education Street, Near City Center, Your City - 123456</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Phone className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <span>info@maadigital.com</span>
              </li>
            </ul>
            
            <div className="flex gap-4 mt-6">
              <a href="#" className="hover:text-blue-400 transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors" aria-label="Youtube">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} MAA Digital Computer Education. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
