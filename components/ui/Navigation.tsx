"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { KeyboardArrowDown } from "@mui/icons-material";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const { scrollY } = useScroll();

  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.95)"]
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const products = [
    { name: "CannyDocs - Document Management", href: "/solutions/document-management" },
    { name: "CannyHR - HR Management", href: "/solutions/hr-management" },
    { name: "CannyScan - Scanning Solution", href: "/solutions/scanning-solution" },
    { name: "CannyTrack - Tracking System", href: "/solutions/tracking-system" },
  ];

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Solutions", href: "/#solutions", hasDropdown: true },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <motion.nav
      style={{ backgroundColor }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "shadow-lg backdrop-blur-md bg-white/95" : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="group cursor-pointer"
            >
              <div className="relative w-32 h-12 sm:w-40 sm:h-14 group-hover:scale-105 transition-transform">
                <Image
                  src="/logo.png"
                  alt="CannyMinds Technology Solutions"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link, index) => (
              link.hasDropdown ? (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setProductsDropdownOpen(true)}
                  onMouseLeave={() => setProductsDropdownOpen(false)}
                >
                  <motion.a
                    href={link.href}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-sm xl:text-base text-gray-700 hover:text-primary font-medium transition-colors relative group flex items-center gap-1 whitespace-nowrap"
                  >
                    {link.name}
                    <KeyboardArrowDown
                      sx={{ fontSize: 20 }}
                      className={`transition-transform ${productsDropdownOpen ? 'rotate-180' : ''}`}
                    />
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                  </motion.a>

                  {/* Dropdown Menu */}
                  {productsDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 w-72 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50"
                    >
                      {products.map((product) => (
                        <Link
                          key={product.name}
                          href={product.href}
                          className="block px-4 py-3 text-gray-700 hover:bg-primary/5 hover:text-primary transition-colors text-sm font-medium"
                        >
                          {product.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </div>
              ) : (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-sm xl:text-base text-gray-700 hover:text-primary font-medium transition-colors relative group whitespace-nowrap"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                </motion.a>
              )
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <motion.a
            href="/contact"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden lg:block px-4 xl:px-6 py-2.5 bg-primary text-white font-semibold rounded-lg shadow-lg shadow-primary/30 transition-all duration-300 text-sm xl:text-base whitespace-nowrap"
          >
            Get Started
          </motion.a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-primary transition-colors rounded-lg hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden pb-6 pt-4 border-t border-gray-200"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                link.hasDropdown ? (
                  <div key={link.name} className="border-b border-gray-100 pb-2">
                    <button
                      onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
                      className="text-gray-700 hover:text-primary hover:bg-gray-50 font-medium py-3 px-4 transition-colors flex items-center justify-between w-full rounded-lg"
                    >
                      <span>{link.name}</span>
                      <KeyboardArrowDown
                        sx={{ fontSize: 20 }}
                        className={`transition-transform ${productsDropdownOpen ? 'rotate-180' : ''}`}
                      />
                    </button>
                    {productsDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="ml-4 mt-2 flex flex-col gap-1 bg-gray-50 rounded-lg p-2"
                      >
                        {products.map((product) => (
                          <Link
                            key={product.name}
                            href={product.href}
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              setProductsDropdownOpen(false);
                            }}
                            className="text-gray-600 hover:text-primary hover:bg-white text-sm py-2 px-3 transition-colors rounded-md"
                          >
                            {product.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-gray-700 hover:text-primary hover:bg-gray-50 font-medium py-3 px-4 transition-colors rounded-lg"
                  >
                    {link.name}
                  </a>
                )
              ))}
              <a
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 px-6 py-3 bg-primary text-white font-semibold rounded-lg text-center shadow-lg shadow-primary/30 hover:bg-primary/90 transition-colors"
              >
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
