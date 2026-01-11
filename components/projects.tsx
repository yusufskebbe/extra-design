"use client";

import React, { useState } from "react";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
}

export const ProjectsSection = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "Koridor Tasarımı",
      category: "Koridor Mobilyaları",
      description: "Özel tasarımlı koridor mobilyaları.",
      image: "/korider.jpeg",
    },
    {
      id: 2,
      title: "Tv Ünite Tasarımı",
      category: "Tv Ünite",
      description: "Özel tasarımlı tv ünite mobilyaları.",
      image: "/tv-unite.jpeg",
    },
    {
      id: 3,
      title: "Yatak Odası Tasarımı",
      category: "Yatak Odası",
      description: "Özel tasarımlı yatak odası mobilyaları.",
      image: "/master-room.jpeg",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Son Çalışmalarımız
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Müşterilerimizin memnuniyetini yansıtan projelerimiz.s
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-2xl h-80 cursor-pointer"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Background Image */}
              <Image
                src={project.image}
                alt={project.title}
                fill
                className={`object-cover transition-opacity duration-500 ${
                  hoveredId === project.id ? "opacity-30" : "opacity-100"
                }`}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />

              {/* Overlay Pattern */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-500" />

              {/* Content - Hidden by default, shown on hover */}
              <div
                className={`absolute inset-0 flex flex-col justify-between p-6 transition-all duration-500 ${
                  hoveredId === project.id ? "opacity-100" : "opacity-0"
                }`}
              >
                {/* Top Section */}
                <div>
                  <span className="inline-block bg-primary/80 text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                    {project.category}
                  </span>
                </div>

                {/* Bottom Section */}
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-white leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-white/90 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Border effect */}
              <div className="absolute inset-0 border border-white/0 group-hover:border-white/20 rounded-2xl transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
