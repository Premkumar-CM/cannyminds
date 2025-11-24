"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const products = ["CannyDocs", "CannyHR", "CannyScan", "CannyTrack"];
  const services = [
    "Digital Transformation",
    "AI & Automation",
    "Software Development",
    "Digital Marketing",
  ];
  const company = ["About Us", "Careers", "Privacy Policy", "Terms of Service"];

  return (
    <footer className="bg-gradient-to-br from-secondary to-primary text-white">
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-2xl">C</span>
              </div>
              <div>
                <div className="text-xl font-bold">CannyMinds</div>
                <div className="text-sm text-blue-200">Technology Solutions</div>
              </div>
            </div>
            <p className="text-blue-100 mb-4 leading-relaxed">
              Empowering businesses worldwide with innovative IT solutions and
              digital transformation services.
            </p>
            <div className="flex gap-4">
              {["linkedin", "twitter", "facebook", "instagram"].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label={social}
                >
                  <span className="text-lg">
                    {social === "linkedin" && "in"}
                    {social === "twitter" && "𝕏"}
                    {social === "facebook" && "f"}
                    {social === "instagram" && "📷"}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-bold mb-4">Products</h3>
            <ul className="space-y-2">
              {products.map((product) => (
                <li key={product}>
                  <a
                    href="#"
                    className="text-blue-100 hover:text-white transition-colors"
                  >
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="text-blue-100 hover:text-white transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2 mb-6">
              {company.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-blue-100 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-sm font-semibold mb-2">ISO Certified</div>
              <div className="flex gap-2">
                <span className="px-2 py-1 bg-white/20 rounded text-xs">
                  ISO 27001
                </span>
                <span className="px-2 py-1 bg-white/20 rounded text-xs">
                  ISO 2015
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-blue-100 text-sm">
              © {currentYear} CannyMinds Technology Solutions. All rights reserved.
            </p>
            <p className="text-blue-200 text-sm">
              Global Offices: India • USA • Nigeria • UAE
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
