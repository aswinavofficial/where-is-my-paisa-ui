"use client";

import { motion } from "motion/react";
import {
  PieChart,
  Wallet,
  TrendingUp,
  Bell,
  Shield,
  Smartphone,
} from "lucide-react";

const features = [
  {
    icon: Wallet,
    title: "Expense Tracking",
    description:
      "Log every transaction effortlessly. Categorize expenses and keep a real-time tab on where your money goes.",
    color: "from-primary to-primary-dark",
    bgColor: "bg-primary/10",
  },
  {
    icon: PieChart,
    title: "Smart Analytics",
    description:
      "Beautiful charts and insights that help you understand your spending patterns at a glance.",
    color: "from-secondary to-pink-600",
    bgColor: "bg-secondary/10",
  },
  {
    icon: TrendingUp,
    title: "Budget Goals",
    description:
      "Set monthly budgets for each category and track your progress. Stay on top of your financial goals.",
    color: "from-accent to-emerald-600",
    bgColor: "bg-accent/10",
  },
  {
    icon: Bell,
    title: "Smart Reminders",
    description:
      "Never miss a bill payment or budget limit. Get timely notifications to keep your finances on track.",
    color: "from-amber-400 to-orange-500",
    bgColor: "bg-amber-100",
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description:
      "Your financial data stays on your device. No cloud uploads, no third-party access. Your money, your business.",
    color: "from-blue-400 to-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    icon: Smartphone,
    title: "Offline First",
    description:
      "Works completely offline. No internet needed to track, analyze, or manage your personal finances.",
    color: "from-violet-400 to-purple-600",
    bgColor: "bg-violet-100",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-32 section-gradient relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full mb-4">
            Features
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-dark">
            Everything you need to{" "}
            <span className="gradient-text">manage money</span>
          </h2>
          <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
            Powerful yet simple tools designed to give you complete control over your personal finances.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group bg-white rounded-2xl p-6 md:p-8 border border-gray-100 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 cursor-default"
            >
              <div
                className={`w-14 h-14 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}
              >
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-dark mb-3">{feature.title}</h3>
              <p className="text-text-secondary leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
