"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PhoneMockup from "./PhoneMockup";

const screenshotData = [
  {
    index: 0,
    title: "Dashboard",
    description: "Get a bird's eye view of your finances with our intuitive dashboard.",
  },
  {
    index: 1,
    title: "Analytics",
    description: "Deep dive into your spending patterns with beautiful visualizations.",
  },
  {
    index: 2,
    title: "Budgets",
    description: "Set and track budgets for every category to stay on top of your goals.",
  },
];

export default function Screenshots() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goNext = () => setActiveIndex((prev) => (prev + 1) % screenshotData.length);
  const goPrev = () => setActiveIndex((prev) => (prev - 1 + screenshotData.length) % screenshotData.length);

  return (
    <section id="screenshots" className="py-20 md:py-32 bg-dark relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute top-20 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 -left-32 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-primary/20 text-primary-light text-sm font-medium px-4 py-1.5 rounded-full mb-4">
            App Preview
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            See it in <span className="gradient-text">Action</span>
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            A beautifully designed interface that makes managing finances feel effortless.
          </p>
        </motion.div>

        {/* Screenshots Display */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <PhoneMockup screenIndex={activeIndex} />
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Screen Info & Navigation */}
          <div className="flex-1 text-center lg:text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {screenshotData[activeIndex].title}
                </h3>
                <p className="text-lg text-gray-400 max-w-md mx-auto lg:mx-0">
                  {screenshotData[activeIndex].description}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="mt-10 flex items-center gap-4 justify-center lg:justify-start">
              <button
                onClick={goPrev}
                className="w-12 h-12 bg-dark-light border border-dark-lighter rounded-full flex items-center justify-center text-white hover:bg-primary/20 hover:border-primary/40 transition-all"
                aria-label="Previous screenshot"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex gap-2">
                {screenshotData.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === activeIndex ? "w-8 bg-primary" : "w-2 bg-dark-lighter hover:bg-dark-light"
                    }`}
                    aria-label={`Go to screenshot ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={goNext}
                className="w-12 h-12 bg-dark-light border border-dark-lighter rounded-full flex items-center justify-center text-white hover:bg-primary/20 hover:border-primary/40 transition-all"
                aria-label="Next screenshot"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Feature pills */}
            <div className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start">
              {["Real-time sync", "Dark mode", "Multiple accounts", "Export data"].map(
                (pill) => (
                  <span
                    key={pill}
                    className="px-4 py-2 bg-dark-light border border-dark-lighter text-gray-300 rounded-full text-sm"
                  >
                    {pill}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
