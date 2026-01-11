"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export const ContactSection = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setSubmitMessage("Thank you! Your message has been sent successfully.");
      setFormData({ name: "", email: "", phone: "", message: "" });
      setIsSubmitting(false);

      // Clear message after 3 seconds
      setTimeout(() => setSubmitMessage(""), 3000);
    }, 1000);
  };

  const whatsappNumber = "+905312570175";
  const whatsappMessage = encodeURIComponent(
    "Merhaba, Extra Design'e hoşgeldiniz. Detaylı bilgi için iletişime geçebilirsiniz?"
  );

  const socialLinks = [
    {
      name: "WhatsApp",
      icon: MessageCircle,
      url: `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`,
      color: "text-green-500 hover:text-green-600",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com",
      color: "text-pink-500 hover:text-pink-600",
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://facebook.com",
      color: "text-blue-600 hover:text-blue-700",
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://twitter.com",
      color: "text-sky-500 hover:text-sky-600",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com",
      color: "text-blue-700 hover:text-blue-800",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            İletişime Geç
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Formu doldurarak veya WhatsApp&apos;tan iletişime geçerek detaylı
            bilgi alabilirsiniz.
          </p>
        </div>

        {/* Contact Container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Side - Contact Info */}
          <div className="space-y-8">
            {/* Contact Information Cards */}
            <div className="space-y-6">
              {/* Phone */}
              <div className="flex gap-4 group">
                <div className="shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <Phone className="w-6 h-6" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground">Telefon</h3>
                  <p className="text-sm text-muted-foreground">
                    +90 555 555 55 55
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4 group">
                <div className="shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <Mail className="w-6 h-6" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground">E-posta</h3>
                  <p className="text-sm text-muted-foreground">
                    info@extradesign.com.tr
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex gap-4 group">
                <div className="shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <MapPin className="w-6 h-6" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground">Adres</h3>
                  <p className="text-sm text-muted-foreground">
                    İstanbul, Kadıköy, 34110, İstanbul, Türkiye
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground text-lg">
                Bize Ulaşın
              </h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={social.name}
                      className={`w-12 h-12 rounded-lg bg-muted border border-border flex items-center justify-center transition-all duration-300 hover:bg-primary/10 ${social.color}`}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* WhatsApp Quick CTA */}
            <div className="bg-linear-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6 space-y-4">
              <div className="flex items-center gap-3">
                <MessageCircle className="w-6 h-6 text-green-600" />
                <h4 className="font-semibold text-foreground">WhatsApp</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                WhatsApp&apos;tan anında yanıt alabilirsiniz.
              </p>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button className="bg-green-600 text-white hover:bg-green-700 w-full">
                  İletişime Geç
                </Button>
              </a>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-card border border-border rounded-xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-foreground mb-2"
                  >
                    Adınız Soyadınız
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Adınız Soyadınız"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-foreground mb-2"
                  >
                    E-posta Adresiniz
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="E-posta Adresiniz"
                  />
                </div>

                {/* Phone Field */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-foreground mb-2"
                  >
                    Telefon Numaranız
                  </label>
                  <Input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Telefon Numaranız"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-foreground mb-2"
                  >
                    Mesajınız
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300 resize-none"
                    placeholder="Mesajınız"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Gönderiliyor..." : "Mesaj Gönder"}
                </Button>

                {/* Success Message */}
                {submitMessage && (
                  <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-sm">
                    {submitMessage}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
