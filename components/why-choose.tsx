"use client";

import React from "react";
import { Check } from "lucide-react";

interface Benefit {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const WhyChooseSection = () => {
  const benefits: Benefit[] = [
    {
      id: 1,
      title: "📐 Ölçüye Özel Tasarım",
      description:
        "Her proje, yaşam alanınızın ölçülerine göre özel olarak planlanır. Hazır kalıp ürün kullanmayız.",
      icon: <Check className="w-6 h-6" />,
    },
    {
      id: 2,
      title: "🪵 Kaliteli Malzeme & İşçilik",
      description:
        " Uzun ömürlü, sağlam ve estetik mobilyalar üretmek için kaliteli malzeme ve temiz işçilik kullanırız.",
      icon: <Check className="w-6 h-6" />,
    },
    {
      id: 3,
      title: "🤝 Şeffaf ve Güvenilir Süreç",
      description:
        "Keşiften teslimata kadar tüm aşamalar net şekilde ilerler. Fiyat ve teslim süresi baştan bellidir.",
      icon: <Check className="w-6 h-6" />,
    },
    {
      id: 4,
      title: "⏱️ Zamanında Teslim & Montaj",
      description:
        "Belirlenen süre içerisinde üretim ve montajı tamamlayarak sizi bekletmeyiz..",
      icon: <Check className="w-6 h-6" />,
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Benefits */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Neden Müşteriler Bizi Seçiyor?
              </h2>
              {/* <p className="text-lg text-muted-foreground">
                Discover the benefits of professional drone services for your
                business and why thousands of clients trust us.
              </p> */}
            </div>

            {/* Benefits Grid */}
            <div className="flex flex-col gap-6">
              {benefits.map((benefit) => (
                <div key={benefit.id} className="flex gap-4 group">
                  {/* Icon Container */}
                  {/* <div className="shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      {benefit.icon}
                    </div>
                  </div> */}

                  {/* Content */}
                  <div className="flex-1 space-y-2">
                    <h3 className="font-semibold text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Visual */}
          <div className="relative">
            <div className="relative bg-background border border-border rounded-3xl p-8 lg:p-12 shadow-xl">
              {/* Background Pattern */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden opacity-5">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,currentColor_1px,transparent_1px)] bg-size-[24px_24px]" />
              </div>

              <div className="relative z-10 space-y-8">
                {/* Stat 1 - Large Number Focus */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
                  <div className="shrink-0">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <div className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
                      100%
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Müşteri Memnuniyeti
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-linear-to-r from-transparent via-border to-transparent" />

                {/* Stat 2 - Horizontal Layout */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
                  <div className="shrink-0">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-3xl">⏱️</span>
                    </div>
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <div className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
                      Verilen Sürede Teslimat
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Zamanında Teslimat
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-linear-to-r from-transparent via-border to-transparent" />

                {/* Stat 3 - Badge Style */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
                  <div className="shrink-0">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-3xl">🏆</span>
                    </div>
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <div className="inline-block bg-primary/10 px-4 py-2 rounded-full mb-2">
                      <span className="text-3xl lg:text-4xl font-bold text-primary">
                        100+
                      </span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Tamamlanan Projeler
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
