"use client";

import { motion } from "motion/react";
import { Wallet } from "lucide-react";

export default function DownloadCTA() {
  return (
    <section id="download" className="py-20 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-gradient-to-br from-dark to-dark-light rounded-3xl overflow-hidden"
        >
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-secondary/20 rounded-full blur-3xl translate-y-1/4 -translate-x-1/4" />
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "30px 30px"
          }} />

          <div className="relative px-8 py-16 md:px-16 md:py-20 text-center">
            {/* Icon */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-primary-light rounded-2xl mb-8 animate-pulse-glow"
            >
              <Wallet className="w-10 h-10 text-white" />
            </motion.div>

            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Ready to take control of your{" "}
              <span className="gradient-text">finances</span>?
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10">
              Download Where is my Paisa today and start your journey to financial clarity.
              It&apos;s free, private, and works offline.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 bg-white text-dark px-8 py-4 rounded-2xl hover:bg-gray-50 transition-all hover:shadow-xl hover:shadow-white/10 hover:scale-105"
              >
                <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
                  <path d="M3.609 1.814L13.792 12 3.609 22.186a.996.996 0 0 1-.609-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302a1.004 1.004 0 0 1 0 1.38l-2.302 2.302L15.396 12l2.302-3.492zM5.864 2.658L16.8 9.991l-2.302 2.302L5.864 2.658z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs text-gray-400">GET IT ON</div>
                  <div className="text-lg font-semibold -mt-0.5">Google Play</div>
                </div>
              </a>

              <a
                href="https://github.com/aswinavofficial/personal-finance-manager"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 border-2 border-gray-600 text-white px-8 py-4 rounded-2xl hover:border-primary hover:bg-primary/10 transition-all"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs text-gray-400">VIEW ON</div>
                  <div className="text-lg font-semibold -mt-0.5">GitHub</div>
                </div>
              </a>
            </div>

            <p className="mt-8 text-sm text-gray-500">
              Free forever • No ads • 100% private
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
