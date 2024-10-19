import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section id="contact">
      <footer className="px-4 py-12 text-gray-300 bg-violet-900 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {/* About Us Section */}
            <div className="lg:col-span-2">
              <h3 className="mb-2 text-lg font-semibold text-white">
                About Us
              </h3>
              <p className="text-sm">
                Mr.Optics Vision specializes in providing comprehensive optical
                solutions, eye care services, stylish eyewear design, and
                effective marketing strategies to enhance your optical
                business's success.
              </p>
            </div>

            {/* Services Section */}
            <div className="lg:col-span-1">
              <h3 className="mb-2 text-lg font-semibold text-white">
                Services
              </h3>
              <ul className="space-y-1">
                {[
                  "Computerized Eye Testing",
                  "Frames & Lenses",
                  "Optical Accessories",
                  "Reading Glasses",
                  "Optical Repair",
                  "Sun Glasses",
                ].map((service) => (
                  <li
                    key={service}
                    className="text-sm transition-colors duration-300 cursor-pointer hover:text-white"
                  >
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Section */}
            <div className="lg:col-span-1">
              <h3 className="mb-2 text-lg font-semibold text-white">Contact</h3>
              <a href="https://maps.app.goo.gl/sVR2XzYeUNtjHZD49">
                <p className="mb-1 text-sm">
                  Opp. D.B.S. Oil Mill, Vaddipalem, KAVALI - 524 201
                </p>
              </a>
              <a href="tel:+919347735047">
                <p className="mb-1 text-sm">+91 9347735047</p>
              </a>
              <a href="mailto:bvs@gmail.com">
                <p className="mb-2 text-sm">bvs@gmail.com</p>
              </a>
              <h3 className="mb-2 text-lg font-semibold text-white">Connect</h3>
              <div className="flex space-x-2">
                {[FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter].map(
                  (Icon, index) => (
                    <a
                      key={index}
                      href="#"
                      className="text-gray-400 transition-colors duration-300 hover:text-white"
                    >
                      <Icon size={20} />
                    </a>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Footer Bottom Section */}
          <div className="pt-4 mt-4 text-center border-t border-gray-700">
            <p className="text-sm">
              &copy; {currentYear} BVS. All rights reserved. Empowering
              businesses with innovative solutions.
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
