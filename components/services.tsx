"use client";

import React from "react";
import { Tv, UtensilsCrossed, Shirt, Layout } from "lucide-react";

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const ServicesSection = () => {
  const services: Service[] = [
    {
      id: 1,
      title: "Modern TV Ünitesi",
      description:
        "Evinizin ölçülerine ve tarzına uygun, özel üretim mobilya çözümleri sunuyoruz.",
      icon: <Tv className="w-8 h-8" />,
    },
    {
      id: 2,
      title: "Mutfak Dolabı",
      description:
        "Evinizin ölçülerine ve tarzına uygun, özel üretim mobilya çözümleri sunuyoruz.",
      icon: <UtensilsCrossed className="w-8 h-8" />,
    },
    {
      id: 3,
      title: "Giyim Odası",
      description:
        "Evinizin ölçülerine ve tarzına uygun, özel üretim mobilya çözümleri sunuyoruz.",
      icon: <Shirt className="w-8 h-8" />,
    },
    {
      id: 4,
      title: "Yatak Odası",
      description:
        "Evinizin ölçülerine ve tarzına uygun, özel üretim mobilya çözümleri sunuyoruz.",
      icon: <Layout className="w-8 h-8" />,
    },
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            NE YAPIYORSUNUZ?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Evinizin ölçülerine ve tarzına uygun, özel üretim mobilya çözümleri
            sunuyoruz.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative bg-card border border-border rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:border-primary/50"
            >
              {/* Background linear on hover */}
              <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <div className="relative z-10 space-y-4">
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                {/* Bottom accent line */}
                <div className="h-1 w-0 bg-primary group-hover:w-12 transition-all duration-300" />
              </div>

              {/* Card border shine effect */}
              <div className="absolute inset-0 rounded-xl border border-transparent bg-linear-to-r from-primary/0 via-primary/10 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
