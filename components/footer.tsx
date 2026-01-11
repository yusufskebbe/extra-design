import React from "react";
import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/extradesign.ist/",
      color: "text-pink-500 hover:text-pink-600",
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://www.facebook.com/extradesign.ist",
      color: "text-blue-600 hover:text-blue-700",
    },
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Navigation Links */}
          <nav className="flex gap-6">
            <Link
              href="#contact"
              className="text-background/70 hover:text-background transition-colors duration-300 text-sm"
            >
              İletişime Geç
            </Link>
            <Link
              href="#services"
              className="text-background/70 hover:text-background transition-colors duration-300 text-sm"
            >
              Hizmetlerimiz
            </Link>
            <Link
              href="#testimonials"
              className="text-background/70 hover:text-background transition-colors duration-300 text-sm"
            >
              Müşteri Yorumları
            </Link>
          </nav>

          {/* Social Media Icons */}
          <div className="flex gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.name}
                  className={`w-10 h-10 rounded-lg bg-background/10 hover:bg-background/20 flex items-center justify-center transition-all duration-300 ${social.color}`}
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-background/10 text-center">
          <p className="text-sm text-background/70">
            © {currentYear} Extra Design. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
