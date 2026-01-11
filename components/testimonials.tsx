"use client";

import React from "react";
import { Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  location: string;
  content: string;
  rating: number;
  initials: string;
}

export const TestimonialsSection = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Merve K.",
      location: "Kadıköy/Istanbul",
      content:
        "Giyim odamız küçük bir alan olmasına rağmen harika değerlendirildi",
      rating: 5,
      initials: "MK",
    },
    {
      id: 2,
      name: "Mehmet D.",
      location: "Beykoz/Istanbul",
      content:
        "Hazır mobilya yerine özel yaptırmanın ne kadar fark ettiğini gördük.",
      rating: 5,
      initials: "MD",
    },
    {
      id: 3,
      name: "Ayşe K.",
      location: "Beylikdüzü/Istanbul",
      content:
        "Evin ölçülerine birebir yapıldı, sonuç tam hayal ettiğimiz gibi oldu.",
      rating: 5,
      initials: "AK",
    },
    {
      id: 4,
      name: "Ahmet Y.",
      location: "Avcılar/Istanbul",
      content: "İletişimleri çok iyiydi, ne istediysek aynısını yaptılar.",
      rating: 5,
      initials: "AY",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Müşteri Memnuniyetleri
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Müşterilerimizin memnuniyetini yansıtan görüşleri.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group relative bg-card border border-border rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:border-primary/50"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <div className="relative z-10 space-y-4">
                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-sm text-muted-foreground leading-relaxed italic">
                  &quot;{testimonial.content}&quot;
                </p>

                {/* Divider */}
                <div className="h-px bg-border" />

                {/* Author Info */}
                <div className="flex items-center gap-3">
                  {/* Avatar */}
                  <div className="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center font-semibold text-sm group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    {testimonial.initials}
                  </div>

                  {/* Name & Role */}
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors duration-300">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
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
