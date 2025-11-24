"use client";

import { motion } from "framer-motion";
import RevealOnScroll from "../ui/RevealOnScroll";
import DescriptionIcon from '@mui/icons-material/Description';
import PeopleIcon from '@mui/icons-material/People';
import ScannerIcon from '@mui/icons-material/Scanner';
import BarChartIcon from '@mui/icons-material/BarChart';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import CodeIcon from '@mui/icons-material/Code';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import SettingsIcon from '@mui/icons-material/Settings';
import FolderIcon from '@mui/icons-material/Folder';

const products = [
  {
    name: "CannyDocs",
    icon: DescriptionIcon,
    description:
      "Enterprise document management software enabling professional organization and instant retrieval through secure web browsers.",
    features: ["Cloud Storage", "Quick Search", "Version Control", "Secure Access"],
    color: "from-blue-500 to-cyan-500",
    link: "/products/document-management",
  },
  {
    name: "CannyHR",
    icon: PeopleIcon,
    description:
      "Complete HR and payroll management solution aligned with industry regulations and organizational policies.",
    features: ["Payroll Management", "Leave Tracking", "Performance Reviews", "Compliance"],
    color: "from-purple-500 to-pink-500",
    link: "/products/cannyhr",
  },
  {
    name: "CannyScan",
    icon: ScannerIcon,
    description:
      "Professional document scanning and digitization services providing instant and secure access to information.",
    features: ["High-Speed Scanning", "OCR Technology", "Digital Archive", "Cloud Integration"],
    color: "from-green-500 to-emerald-500",
    link: "/products/cannyscan",
  },
  {
    name: "CannyTrack",
    icon: BarChartIcon,
    description:
      "Workforce productivity monitoring and analytics platform for modern workplaces.",
    features: ["Activity Monitoring", "Productivity Analytics", "Data Security", "Real-time Reports"],
    color: "from-orange-500 to-red-500",
    link: "/products/cannytrack",
  },
];

const services = [
  {
    title: "Digital Transformation",
    description: "End-to-end business digitization and process automation solutions",
    icon: RocketLaunchIcon,
  },
  {
    title: "AI & Automation",
    description: "Intelligent automation powered by artificial intelligence and machine learning",
    icon: SmartToyIcon,
  },
  {
    title: "Software Development",
    description: "Custom enterprise software tailored to your business requirements",
    icon: CodeIcon,
  },
  {
    title: "Digital Marketing",
    description: "Data-driven strategies to enhance your online presence and reach",
    icon: PhoneAndroidIcon,
  },
  {
    title: "Business Process Services",
    description: "Streamline workflows with our expert BPS consulting",
    icon: SettingsIcon,
  },
  {
    title: "Record Management",
    description: "Secure physical and digital record management solutions",
    icon: FolderIcon,
  },
];

export default function ProductsUpdated() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Products Section */}
        <article className="mb-32">
          <RevealOnScroll>
            <header className="text-center mb-16">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Our Products
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-secondary mt-4 mb-6">
                Enterprise Software Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Powerful, scalable software products designed to transform your business operations.
                Trusted by 500+ organizations worldwide for their digital transformation journey.
              </p>
            </header>
          </RevealOnScroll>

          <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {products.map((product, index) => {
              const IconComponent = product.icon;
              return (
                <RevealOnScroll
                  key={product.name}
                  delay={index * 0.1}
                  direction={index % 2 === 0 ? "left" : "right"}
                >
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="group relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 h-full min-h-[420px] flex flex-col"
                  >
                    {/* Background Gradient on Hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                    <div className="relative z-10 flex-1 flex flex-col">
                      {/* Icon */}
                      <div className="w-16 h-16 mb-4 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <IconComponent sx={{ fontSize: 32, color: '#4154f1' }} />
                      </div>

                      {/* Product Name */}
                      <h3 className="text-2xl font-bold text-secondary mb-4">
                        {product.name}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 mb-6 leading-relaxed flex-1 text-base">
                        {product.description}
                      </p>

                      {/* Quick Stats/Benefits */}
                      <div className="bg-gray-50 rounded-lg p-4 mb-6">
                        <h4 className="text-sm font-bold text-secondary mb-2 uppercase tracking-wide">Key Capabilities:</h4>
                        <ul className="space-y-1 text-sm text-gray-700">
                          {product.features.slice(0, 2).map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M5 13l4 4L19 7"></path>
                              </svg>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Features */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {product.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>

                      {/* CTA */}
                      <motion.a
                        href={product.link}
                        whileHover={{ x: 5 }}
                        className="text-primary font-semibold inline-flex items-center gap-2 group/btn"
                      >
                        Learn More
                        <svg
                          className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                        </svg>
                      </motion.a>
                    </div>
                  </motion.div>
                </RevealOnScroll>
              );
            })}
          </div>
        </article>

        {/* Services Section */}
        <article>
          <RevealOnScroll>
            <header className="text-center mb-16">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Our Services
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-secondary mt-4 mb-6">
                Comprehensive IT Consulting Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Expert services to accelerate your digital transformation journey.
                We combine industry best practices with innovative solutions tailored to your business needs.
              </p>
            </header>
          </RevealOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <RevealOnScroll key={service.title} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className="bg-white rounded-xl p-6 shadow-md border border-gray-100 transition-all duration-300"
                  >
                    <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <IconComponent sx={{ fontSize: 28, color: '#4154f1' }} />
                    </div>
                    <h3 className="text-xl font-bold text-secondary mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-base">
                      {service.description}
                    </p>
                  </motion.div>
                </RevealOnScroll>
              );
            })}
          </div>
        </article>
      </div>
    </section>
  );
}
