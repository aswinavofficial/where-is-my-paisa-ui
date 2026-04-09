"use client";

import { motion } from "motion/react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Freelancer",
    avatar: "PS",
    rating: 5,
    text: "Finally an expense tracker that respects my privacy! I love that all data stays on my phone. The interface is so clean and easy to use.",
    color: "bg-primary",
  },
  {
    name: "Rahul Verma",
    role: "Software Engineer",
    avatar: "RV",
    rating: 5,
    text: "The analytics are incredible. I could immediately see where my money was going and I&apos;ve saved ₹5,000 more per month since using this app.",
    color: "bg-secondary",
  },
  {
    name: "Ananya Patel",
    role: "Student",
    avatar: "AP",
    rating: 5,
    text: "As a student on a budget, this app has been a game-changer. The budget feature helps me stay disciplined with my monthly allowance.",
    color: "bg-accent",
  },
  {
    name: "Vikram Singh",
    role: "Business Owner",
    avatar: "VS",
    rating: 4,
    text: "Simple yet powerful. I manage both personal and small business expenses with ease. The categorization feature is top notch!",
    color: "bg-amber-500",
  },
  {
    name: "Deepa Nair",
    role: "Teacher",
    avatar: "DN",
    rating: 5,
    text: "Love the offline-first approach. Works perfectly even in areas with poor connectivity. The UI is beautiful and very intuitive.",
    color: "bg-blue-500",
  },
  {
    name: "Arjun Reddy",
    role: "Doctor",
    avatar: "AR",
    rating: 5,
    text: "Clean, minimal, and does exactly what it promises. No ads, no unnecessary features. Just perfect expense tracking.",
    color: "bg-violet-500",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-32 section-gradient relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-secondary/10 text-secondary text-sm font-medium px-4 py-1.5 rounded-full mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-dark">
            Loved by <span className="gradient-text">thousands</span>
          </h2>
          <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
            See what our users have to say about their experience with Where is my Paisa.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:shadow-primary/5 transition-all"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4" role="img" aria-label={`${testimonial.rating} out of 5 stars`}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    aria-hidden="true"
                    className={`w-4 h-4 ${
                      i < testimonial.rating
                        ? "fill-amber-400 text-amber-400"
                        : "fill-gray-200 text-gray-200"
                    }`}
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-text-secondary leading-relaxed mb-6">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* User */}
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 ${testimonial.color} rounded-full flex items-center justify-center text-white text-sm font-bold`}
                >
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-dark">{testimonial.name}</p>
                  <p className="text-xs text-text-secondary">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
