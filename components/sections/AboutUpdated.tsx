"use client";

import { motion } from "framer-motion";
import RevealOnScroll from "../ui/RevealOnScroll";
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import VerifiedIcon from '@mui/icons-material/Verified';
import SecurityIcon from '@mui/icons-material/Security';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import StarIcon from '@mui/icons-material/Star';
import HandshakeIcon from '@mui/icons-material/Handshake';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const eatPillars = [
  {
    title: "Experience",
    icon: WorkspacePremiumIcon,
    description:
      "Over 20 years of hands-on experience delivering enterprise solutions across diverse industries and global markets.",
    metrics: ["500+ Projects", "15+ Industries", "4 Continents"],
  },
  {
    title: "Expertise",
    icon: EmojiEventsIcon,
    description:
      "Our team of certified professionals brings deep technical knowledge in AI, automation, and digital transformation.",
    metrics: ["50+ Certified Experts", "Advanced Technologies", "Best Practices"],
  },
  {
    title: "Authoritativeness",
    icon: VerifiedIcon,
    description:
      "Recognized industry leader with ISO certifications and trusted partnerships with Fortune 500 companies.",
    metrics: ["ISO 27001 Certified", "ISO 2015 Certified", "Industry Awards"],
  },
  {
    title: "Trustworthiness",
    icon: SecurityIcon,
    description:
      "Committed to data security, transparency, and ethical business practices with a proven track record.",
    metrics: ["99.9% Uptime", "GDPR Compliant", "24/7 Support"],
  },
];

const values = [
  {
    title: "Innovation",
    description: "Constantly pushing boundaries with cutting-edge technology",
    icon: LightbulbIcon,
  },
  {
    title: "Quality",
    description: "Delivering excellence in every project we undertake",
    icon: StarIcon,
  },
  {
    title: "Integrity",
    description: "Building relationships based on trust and transparency",
    icon: HandshakeIcon,
  },
  {
    title: "Customer Success",
    description: "Your success is our ultimate measure of achievement",
    icon: TrendingUpIcon,
  },
];

export default function AboutUpdated() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-40">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <article className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Main About Section */}
        <RevealOnScroll>
          <header className="max-w-5xl mx-auto text-center mb-20">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              About CannyMinds
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mt-4 mb-8">
              Your Trusted Technology Partner
            </h2>

            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 md:p-10 border border-gray-100 shadow-lg mb-8">
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-6 font-medium">
                CannyMinds Technology Solutions is a <strong className="text-secondary">global leader in digital transformation</strong>,
                helping organizations innovate, digitalize, and transform their operations with
                cutting-edge IT solutions.
              </p>

              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div className="bg-white rounded-lg p-6 border border-gray-100">
                  <h3 className="text-lg font-bold text-secondary mb-3 flex items-center gap-2">
                    <svg className="w-6 h-6 text-primary" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                    </svg>
                    Global Reach
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    With offices across <strong>India, USA, Nigeria, and UAE</strong>, we deliver
                    world-class services combining local expertise with global best practices.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 border border-gray-100">
                  <h3 className="text-lg font-bold text-secondary mb-3 flex items-center gap-2">
                    <svg className="w-6 h-6 text-primary" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    Proven Track Record
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    <strong>20+ years of experience</strong> delivering enterprise solutions to
                    <strong> 500+ satisfied clients</strong> across 50+ countries worldwide.
                  </p>
                </div>
              </div>
            </div>
          </header>
        </RevealOnScroll>

        {/* E-E-A-T Pillars - Standardized Cards */}
        <div className="mb-24">
          <RevealOnScroll>
            <h3 className="text-3xl font-bold text-center text-secondary mb-12">
              Why Choose CannyMinds?
            </h3>
          </RevealOnScroll>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {eatPillars.map((pillar, index) => {
              const IconComponent = pillar.icon;
              return (
                <RevealOnScroll
                  key={pillar.title}
                  delay={index * 0.1}
                  direction={index % 2 === 0 ? "left" : "right"}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg border border-gray-100 h-full min-h-[280px] flex flex-col"
                  >
                    <div className="flex items-start gap-4 mb-4 flex-1">
                      <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <IconComponent sx={{ fontSize: 28, color: '#4154f1' }} />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-2xl font-bold text-secondary mb-2">
                          {pillar.title}
                        </h4>
                        <p className="text-gray-600 leading-relaxed mb-4">
                          {pillar.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {pillar.metrics.map((metric, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium"
                            >
                              {metric}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>

        {/* Core Values - Standardized Cards */}
        <div>
          <RevealOnScroll>
            <h3 className="text-3xl font-bold text-center text-secondary mb-12">
              Our Core Values
            </h3>
          </RevealOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <RevealOnScroll key={value.title} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="text-center bg-white rounded-xl p-6 shadow-md border border-gray-100 h-full min-h-[200px] flex flex-col items-center justify-center"
                  >
                    <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <IconComponent sx={{ fontSize: 32, color: '#4154f1' }} />
                    </div>
                    <h4 className="text-xl font-bold text-secondary mb-2">
                      {value.title}
                    </h4>
                    <p className="text-gray-600">{value.description}</p>
                  </motion.div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>

        {/* Certifications */}
        <RevealOnScroll>
          <div className="mt-20 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-secondary mb-4">
              ISO Certified Excellence
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our commitment to quality and security is validated by internationally
              recognized ISO certifications
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white px-8 py-4 rounded-lg shadow-md min-w-[180px]"
              >
                <div className="text-primary font-bold text-lg">ISO 27001</div>
                <div className="text-sm text-gray-600">Information Security</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white px-8 py-4 rounded-lg shadow-md min-w-[180px]"
              >
                <div className="text-primary font-bold text-lg">ISO 2015</div>
                <div className="text-sm text-gray-600">Quality Management</div>
              </motion.div>
            </div>
          </div>
        </RevealOnScroll>
      </article>
    </section>
  );
}
