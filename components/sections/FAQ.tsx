"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import RevealOnScroll from "../ui/RevealOnScroll";

// FAQ Schema for SEO
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [] as any[]
};

const faqs = [
  {
    question: "What services does CannyMinds offer?",
    answer:
      "CannyMinds offers comprehensive IT solutions including digital transformation, AI automation, custom software development, cloud services, digital marketing, business process automation, and enterprise software products like CannyDocs, CannyHR, CannyScan, and CannyTrack.",
  },
  {
    question: "Is CannyMinds ISO certified?",
    answer:
      "Yes, CannyMinds is ISO 27001 (Information Security Management) and ISO 9001:2015 (Quality Management) certified, ensuring world-class quality and security standards for all our services and products.",
  },
  {
    question: "Where is CannyMinds located?",
    answer:
      "CannyMinds has global offices in India (Chennai - Headquarters), USA (McKinney, Texas), Nigeria (Lagos), and UAE (Dubai), serving clients across 50+ countries with 24/7 support.",
  },
  {
    question: "What is CannyDocs document management software?",
    answer:
      "CannyDocs is a smart document management software that enables professional document organization, version control, quick search, and instant retrieval through secure web browsers with cloud storage capabilities. It's perfect for enterprises looking to digitize their document workflows.",
  },
  {
    question: "How can CannyMinds help with digital transformation?",
    answer:
      "CannyMinds provides end-to-end digital transformation services including business process automation, cloud migration, AI implementation, legacy system modernization, and digital strategy consulting. We've helped 500+ companies successfully transform their operations.",
  },
  {
    question: "Does CannyMinds provide 24/7 support?",
    answer:
      "Yes, we provide 24/7 customer support across all our global offices. You can reach us via phone, email, or our support portal anytime for technical assistance, sales inquiries, or general questions.",
  },
  {
    question: "What industries does CannyMinds serve?",
    answer:
      "We serve 15+ industries including healthcare, finance, education, retail, manufacturing, government, logistics, real estate, and more. Our solutions are customizable to meet specific industry requirements and compliance standards.",
  },
  {
    question: "How experienced is the CannyMinds team?",
    answer:
      "CannyMinds has 20+ years of industry experience with a team of 50+ certified professionals specializing in AI, cloud computing, software development, and digital transformation. Our experts hold certifications in leading technologies and methodologies.",
  },
];

// Populate FAQ schema
faqSchema.mainEntity = faqs.map(faq => ({
  "@type": "Question",
  "name": faq.question,
  "acceptedAnswer": {
    "@type": "Answer",
    "text": faq.answer
  }
}));

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      {/* JSON-LD FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <article className="container mx-auto px-6 lg:px-12">
        <RevealOnScroll>
          <header className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              FAQ
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mt-4 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Find answers to common questions about our IT solutions, services, and company.
              Can't find what you're looking for? <a href="#contact" className="text-primary font-semibold hover:underline">Contact us</a> directly.
            </p>
          </header>
        </RevealOnScroll>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <RevealOnScroll key={index} delay={index * 0.1}>
              <motion.div
                className="mb-4 bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden"
                initial={false}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-6 flex items-center justify-between transition-colors hover:bg-gray-50"
                  aria-expanded={openIndex === index}
                >
                  <span className="text-lg font-semibold text-secondary pr-8">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg
                      className="w-6 h-6 text-primary flex-shrink-0"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </motion.div>
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? "auto" : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 pt-2">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </motion.div>
              </motion.div>
            </RevealOnScroll>
          ))}
        </div>

        {/* CTA below FAQ */}
        <RevealOnScroll delay={0.5}>
          <div className="mt-16 text-center bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-secondary mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our team of experts is ready to help you find the perfect IT solution
              for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-primary text-white font-semibold rounded-lg shadow-lg shadow-primary/30 transition-all duration-300"
              >
                Contact Us
              </motion.a>
              <motion.a
                href="tel:+91-9361801926"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white text-primary font-semibold rounded-lg border-2 border-primary transition-all duration-300 shadow-lg"
              >
                Call: +91-9361801926
              </motion.a>
            </div>
          </div>
        </RevealOnScroll>
      </article>
    </section>
  );
}
