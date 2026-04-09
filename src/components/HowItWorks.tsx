"use client";

import { motion } from "motion/react";
import { Download, UserPlus, ListChecks, BarChart3 } from "lucide-react";

const steps = [
  {
    icon: Download,
    step: "01",
    title: "Download the App",
    description: "Get Where is my Paisa for free from the Google Play Store.",
    color: "from-primary to-primary-dark",
  },
  {
    icon: UserPlus,
    step: "02",
    title: "Set Up Your Profile",
    description: "Personalize your experience with currency, categories, and budgets.",
    color: "from-secondary to-pink-600",
  },
  {
    icon: ListChecks,
    step: "03",
    title: "Track Your Expenses",
    description: "Log your daily transactions in seconds. Add notes and categories for clarity.",
    color: "from-accent to-emerald-600",
  },
  {
    icon: BarChart3,
    step: "04",
    title: "Gain Insights",
    description: "View detailed analytics, charts, and reports to understand your spending habits.",
    color: "from-amber-400 to-orange-500",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-accent/10 text-accent text-sm font-medium px-4 py-1.5 rounded-full mb-4">
            How It Works
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-dark">
            Get started in{" "}
            <span className="gradient-text">4 simple steps</span>
          </h2>
          <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
            From download to financial clarity in minutes. It&apos;s that easy.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative group"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[calc(50%+40px)] w-[calc(100%-40px)] h-px border-t-2 border-dashed border-gray-200" />
              )}

              <div className="text-center">
                {/* Step number badge */}
                <div className="relative inline-block mb-6">
                  <div
                    className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}
                  >
                    <step.icon className="w-9 h-9 text-white" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-7 h-7 bg-white border-2 border-gray-100 rounded-full flex items-center justify-center text-xs font-bold text-dark shadow-sm">
                    {step.step}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-dark mb-2">{step.title}</h3>
                <p className="text-text-secondary leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
