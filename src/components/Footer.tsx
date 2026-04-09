"use client";

import { Wallet, Heart } from "lucide-react";

const footerLinks = {
  Product: [
    { name: "Features", href: "#features" },
    { name: "Screenshots", href: "#screenshots" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Download", href: "#download" },
  ],
  Resources: [
    { name: "GitHub", href: "https://github.com/aswinavofficial/personal-finance-manager" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "FAQ", href: "#" },
  ],
  Connect: [
    { name: "Twitter", href: "#" },
    { name: "Instagram", href: "#" },
    { name: "LinkedIn", href: "#" },
    { name: "Email Us", href: "mailto:hello@whereismypaisa.com" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-dark text-gray-400 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                <Wallet className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold text-white">
                Where is my Paisa
              </span>
            </a>
            <p className="text-sm leading-relaxed text-gray-500 max-w-xs">
              Your personal finance companion. Track expenses, set budgets, 
              and gain insights — all while keeping your data private.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-500 hover:text-primary transition-colors"
                      {...(link.href.startsWith("http") || link.href.startsWith("mailto")
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-dark-lighter pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; <span suppressHydrationWarning>{new Date().getFullYear()}</span> Where is my Paisa. All rights reserved.
          </p>
          <p className="text-sm text-gray-500 flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-secondary fill-secondary" /> in India
          </p>
        </div>
      </div>
    </footer>
  );
}
