"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-background to-muted">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground leading-tight">
              Evinize Özel Ölçü Mobilya Tasarımları
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              TV Ünitesi, Mutfak Dolabı ve Giyim Odası Mimari ölçüyle, kaliteli
              malzeme ile üretiyoruz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                onClick={() => {
                  window.location.href = "#services";
                }}
                className="flex items-center justify-center gap-2 group"
              >
                Neler Yapıyoruz?
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => {
                  window.location.href = "#projects";
                }}
              >
                Çalışmalarımızı Görüntüle
              </Button>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative hidden lg:block">
            {/* Hero image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-96 lg:h-full min-h-96">
              <Image
                src="/interior.jpeg"
                alt="Modern interior design with custom furniture"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Floating stats card */}
            <div className="absolute -bottom-4 -right-4 bg-background rounded-lg shadow-lg p-4 sm:p-6 max-w-xs border border-border">
              <div className="text-xs sm:text-sm text-muted-foreground mb-2">
                Özel Tasarım
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-foreground">
                100% Özel
              </div>
              <div className="text-xs text-primary font-medium mt-1">
                ✓ Mimari Ölçü
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
